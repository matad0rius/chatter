import consumer from "./consumer"
import CableReady from 'cable_ready'

consumer.subscriptions.create("TimeLineChannel", {

  received(data) {
    if (data.cableReady) CableReady.perform(data.operations)
  }
});
