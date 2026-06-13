export function formatViewers(value) {
  if (value >= 10000) {
    return `${(value / 1000).toFixed(1)}K`
  }
  return value.toLocaleString()
}

export function getStreamById(streams, id) {
  return streams.find((stream) => stream.id === id) || streams[0]
}
