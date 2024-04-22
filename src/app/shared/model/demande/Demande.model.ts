import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SocieteDto} from '../commun/Societe.model';
import {EtatDemandeDto} from './EtatDemande.model';
import {TypeDemandeDto} from './TypeDemande.model';
import {ComptableDto} from '../commun/Comptable.model';

export class DemandeDto extends BaseDto{

    public code: string;

    public libelle: string;

   public dateDemande: Date;

   public dateExigibilite: Date;

   public dateValidation: Date;

   public dateTraitement: Date;

    public societe: SocieteDto ;
    public typeDemande: TypeDemandeDto ;
    public etatDemande: EtatDemandeDto ;
    public comptableValidateur: ComptableDto ;
    public comptableTraitant: ComptableDto ;
    

    constructor() {
        super();

        this.code = '';
        this.libelle = '';
        this.dateDemande = null;
        this.dateExigibilite = null;
        this.dateValidation = null;
        this.dateTraitement = null;
        this.societe = new SocieteDto() ;
        this.typeDemande = new TypeDemandeDto() ;
        this.etatDemande = new EtatDemandeDto() ;
        this.comptableValidateur = new ComptableDto() ;
        this.comptableTraitant = new ComptableDto() ;

        }

}
