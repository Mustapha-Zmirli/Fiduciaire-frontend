import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class SocieteDto extends BaseDto{

    public ice: string;

    public rc: string;

    

    constructor() {
        super();

        this.ice = '';
        this.rc = '';

        }

}
