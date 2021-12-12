export const useConsole = {
    log: ({ type, message }) => {
        const log = `[${type}] ${message}`;
        console.log(log);
        return log;
    },
    error: ({ type, message }) => {
        const log = `[ERROR - ${type}] ${message}`;
        console.error(log);
        return log;
    },
};
