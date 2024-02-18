declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PRODUCTION_URL: string

      HOTPOT_AI_KEY: string
    }
  }
}

export {}
