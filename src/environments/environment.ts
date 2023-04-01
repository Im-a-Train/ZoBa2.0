
export interface environmentInterface {
    recaptcha: {
        siteKey: string
    },

    backend: {
        zoBaHost: string
    }
}

export const environment: environmentInterface = {
    recaptcha: {
        siteKey: '6LekOEElAAAAAF6GtSJigPM6I8vTCkgKdzPzh42o'
    },

    backend: {
        zoBaHost: ''
    }
};