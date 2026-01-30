const connections = []

onconnect = (e) => {
  const port = e.ports[0]
  connections.push(port)

  port.onmessage = (e) => {
    console.log('worker 收到:', e.data)
    connections.forEach((conn) => {
      if (conn !== port) conn.postMessage(e.data)
    })
  }

  port.start()
}
