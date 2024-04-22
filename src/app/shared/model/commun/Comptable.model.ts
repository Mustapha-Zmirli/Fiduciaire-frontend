import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ComptableDto extends BaseDto{

    public cin: string;

    public prenom: string;

    public nom: string;

    public email: string;

    public categorieComptable: string;

    

    constructor() {
        super();

        this.cin = '';
        this.prenom = '';
        this.nom = '';
        this.email = '';
        this.categorieComptable = '';

        }

}
