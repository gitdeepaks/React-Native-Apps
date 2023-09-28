import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {playbackService} from '../../musicLayerServices';

const ControlCenter = () => {
  const playBackState = usePlaybackState();

  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const togglePlayback = async (playback: State) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack == null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Icons name="skip-previous" size={32} style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => togglePlayback(playBackState)}>
        {playBackState === State.Playing ? (
          <Icons name="pause" size={32} style={styles.playButton} />
        ) : (
          <Icons name="play-arrow" size={32} style={styles.playButton} />
        )}
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icons name="skip-next" size={32} style={styles.icon} />
      </Pressable>
    </View>
  );
};

export default ControlCenter;

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});
