import { NhostClient } from '@nhost/nhost-js'

const nhost = new NhostClient({
  backendUrl: 'http://*youriphere*:1337',
  clientStorage: 'AsyncStorage',
  clientStorageType: 'expo',
  autoRefreshToken: true,
  autoLogin: true
})

export { nhost };