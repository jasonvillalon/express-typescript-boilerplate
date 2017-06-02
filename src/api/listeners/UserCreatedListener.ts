import { inject, named } from 'inversify';
import { Types } from '../../constants/Types';
import { Core } from '../../constants/Targets';
import { events } from '../../core/api/events';
import { Log } from '../../core/log/';

const log = new Log('api:listeners:UserCreated');


export class UserCreatedListener {

    static Event = Symbol('UserCreated');

    public log: Log;

    constructor(
        @inject(Types.Core) @named(Core.Log) Logger: typeof Log
    ) {
        this.log = new Logger('api:listeners:UserCreatedListener');
    }

    public async run(user: any): Promise<void> {
        log.info('Receive event UserCreated', user);
    }

}
