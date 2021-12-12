type LogProps = {
  type: string;
  message: any;
};

export const useConsole = {
  log: ({ type, message }: LogProps) => {
    const log = `[${type}] ${message}`;

    console.log(log);

    return log;
  },

  error: ({ type, message }: LogProps) => {
    const log = `[ERROR - ${type}] ${message}`;

    console.error(log);

    return log;
  },
};
