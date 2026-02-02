type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  [key: string]: any;
}

class Logger {
  private formatLog(level: LogLevel, message: string, meta?: Record<string, any>): LogEntry {
    return {
      level,
      message,
      timestamp: new Date().toISOString(),
      ...meta,
    };
  }

  info(message: string, meta?: Record<string, any>) {
    const log = this.formatLog('info', message, meta);
    console.log(JSON.stringify(log));
  }

  warn(message: string, meta?: Record<string, any>) {
    const log = this.formatLog('warn', message, meta);
    console.warn(JSON.stringify(log));
  }

  error(message: string, meta?: Record<string, any>) {
    const log = this.formatLog('error', message, meta);
    console.error(JSON.stringify(log));
  }

  debug(message: string, meta?: Record<string, any>) {
    if (process.env.NODE_ENV === 'development') {
      const log = this.formatLog('debug', message, meta);
      console.debug(JSON.stringify(log));
    }
  }
}

export const logger = new Logger();

