import { defineNuxtPlugin } from '#app'
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app'

export default defineNuxtPlugin(async () => {
    // 直接寫死你的 Firebase 設定（不走 .env）
    const firebaseConfig = {
        apiKey: 'AIzaSyCuE2rc7eiB1KLfu1qxei19RlZQdp0vvZ8',
        authDomain: 'disc-6c0c5.firebaseapp.com',
        projectId: 'disc-6c0c5',
        storageBucket: 'disc-6c0c5.firebasestorage.app',
        messagingSenderId: '581252661468',
        appId: '1:581252661468:web:3552b590cf984f49303419',
        measurementId: 'G-SLZYXQHHR7' // 可選
    } as const

    const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig)

    // Analytics（僅在支援時載入）
    let analytics: import('firebase/analytics').Analytics | null = null
    try {
        const { isSupported, getAnalytics } = await import('firebase/analytics')
        if (await isSupported() && firebaseConfig.measurementId) {
            analytics = getAnalytics(app)
        }
    } catch {
        // 不支援（如 Safari ITP）時略過
    }

    return {
        provide: {
            firebase: app,
            analytics
        }
    }
})