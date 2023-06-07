import React, { useState } from 'react'
import './Offre.css'
import { FaHistory, FaPenAlt, FaPlusSquare, FaTrashAlt } from 'react-icons/fa'

const Offre = () => {

    /*pour controller l'affichage du l'ajout d'un offre*/
    const [showAddOffre, setShowAddOffre] = useState(false);
    const toggleAddOffre = () => {
        setShowAddOffre(!showAddOffre);
    };

    /*pour controller l'affichage du historique d'offre*/
    const [showHistoriqueOffre, setShowHistoriqueOffre] = useState(false);
    const toggleHistoriqueOffre = () => {
        setShowHistoriqueOffre(!showHistoriqueOffre);
    };

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="dashNavigate text-primary" onClick={toggleAddOffre}>
                            <FaPlusSquare className='fs-1' />
                            <h4 className='mb-0'>Ajouter/Modifier un offre</h4>
                        </div>
                        {showAddOffre && (
                            <div className="UserFormations">
                                <form className='FormationForm'>
                                    <div className="row my-3">
                                        <div className="col-md-6">
                                            <label htmlFor="NomOffre" className='form-label'>Nom d'offre<span className='text-danger'>*</span></label>
                                            <input type='text' id="NomOffre" required className="form-control" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="Lieu" className='form-label'>Lieu<span className='text-danger'>*</span></label>
                                            <input type='text' id="Lieu" required className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-md-6">
                                            <label htmlFor="DatePub" className='form-label'>Date de Publication<span className='text-danger'>*</span></label>
                                            <input type='date' id="DatePub" required className="form-control" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="DateFin" className='form-label'>Date de Fin<span className='text-danger'>*</span></label>
                                            <input type='date' id="DateFin" required className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-md-6">
                                            <div className="TypeOffre">
                                                <label htmlFor="TypeOffre" className='form-label'>Type d'offre<span className='text-danger'>*</span></label>
                                                <select id="TypeOffre" name="TypeOffre" title="Choisir un Secteur" className="form-select">
                                                    <option value="Type d'offre">Type d'offre</option>
                                                    <option value="CDI">CDI</option>
                                                    <option value="CDD">CDD</option>
                                                    <option value="Stage">Stage</option>
                                                    <option value="Emploi saisonnier">Emploi saisonnier</option>
                                                    <option value="Anapec">Anapec</option>
                                                    <option value="Autres">Autres</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="NombrePoste" className='form-label'>Nombre de poste<span className='text-danger'>*</span></label>
                                            <input type='number' id="NombrePoste" required className="form-control" min={1} />
                                        </div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-md-12">
                                            <div className="Domaine">
                                                <label htmlFor="Domaine" className='form-label'>Domaine<span className='text-danger'>*</span></label>
                                                <select id="Domaine" name="Domaine" title="Choisir un Secteur" className="form-select">
                                                    <option value="Domaine">Domaine</option>
                                                    <option value="1">Achats</option>
                                                    <option value="2">Administratif</option>
                                                    <option value="3">Assistanat de direction</option>
                                                    <option value="4">Commercial / Support commercial</option>
                                                    <option value="5">Communication</option>
                                                    <option value="6">Contrôle et risque</option>
                                                    <option value="7">Finance</option>
                                                    <option value="8">Gestion de projets / Etudes</option>
                                                    <option value="9">Juridique</option>
                                                    <option value="10">IT/ Informatique</option>
                                                    <option value="11">Marketing</option>
                                                    <option value="12">Méthode / Organisation / Process</option>
                                                    <option value="13">Moyens Généraux / Logistique</option>
                                                    <option value="14">Qualité</option>
                                                    <option value="15">Réseau Agence bancaires</option>
                                                    <option value="16">Ressources Humaines</option>
                                                    <option value="17">Santé / Social</option>
                                                    <option value="18">Système d'Information / AMOA</option>
                                                    <option value="Autres">Autres</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-md-12">
                                            <div className="NiveauEtude">
                                                <label htmlFor="NiveauEtude" className='form-label'>Niveau d'étude<span className='text-danger'>*</span></label>
                                                <select id="NiveauEtude" name="Domaine" title="Choisir un Secteur" className="form-select">
                                                    <option value="Niveau d'étude">Niveau d'étude</option>
                                                    <option value="Aucun diplôme">Aucun diplôme</option>
                                                    <option value="BAC">BAC</option>
                                                    <option value="BAC+1">BAC+1</option>
                                                    <option value="BAC+2">BAC+2</option>
                                                    <option value="BAC+3">BAC+3</option>
                                                    <option value="BAC+5">BAC+5</option>
                                                    <option value="BAC+5 et Plus">BAC+5 et Plus</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-md-12">
                                            <div className="Experience">
                                                <label htmlFor="NiveauExperience" className='form-label'>Niveau d'expérience<span className='text-danger'>*</span></label>
                                                <select id="Expérience" name="Expérience" title="Choisir les années d'expérience" className="form-select">
                                                    <option value="Niveau d'expérience">Niveau d'expérience</option>
                                                    <option value="Aucun">Aucun</option>
                                                    <option value="Moins d'un an">Moins d'un an</option>
                                                    <option value="Entre 1 et 2 ans">Entre 1 et 2 ans</option>
                                                    <option value="Entre 2 et 5 ans">Entre 2 et 5 ans</option>
                                                    <option value="Plus de 5 ans">Plus de 5 ans</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-md-12">
                                            <label htmlFor="DescriptionOffre" className='form-label'>Description d'offre<span className='text-danger'>*</span></label>
                                            <textarea name="DescriptionOffre" id="DescriptionOffre" className="form-control" required rows={7}></textarea>
                                        </div>
                                    </div>
                                    <button className='btn btn-primary'>Enregistrer</button>
                                </form>
                            </div>
                        )}
                    </div>
                    <div className="col-md-12">
                        <div className="dashNavigate text-success" onClick={toggleHistoriqueOffre}>
                            <FaHistory className='fs-1' />
                            <h4 className='mb-0'>Historique d'offre</h4>
                        </div>
                        {showHistoriqueOffre && (
                            <div className="UserFormations">
                                <div className="offreInfos table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Titre d'offre</th>
                                                <th>Type d'offre</th>
                                                <th>Nombre de postes</th>
                                                <th>Niveau d'étude</th>
                                                <th>Niveau d'expérience</th>
                                                <th>Date fin de postualtion</th>
                                                <th>Suivi l'offre</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span>Développeur Front-End</span></td>
                                                <td><span>CDI</span></td>
                                                <td><span>10</span></td>
                                                <td><span>BAC+5</span></td>
                                                <td><span>Entre 2 et 5 ans</span></td>
                                                <td><span>17-06-2023</span></td>
                                                <td>
                                                    <FaPenAlt className='text-warning'/>
                                                    <FaTrashAlt className='text-danger ms-3'/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span>Développeur Front-End</span></td>
                                                <td><span>CDI</span></td>
                                                <td><span>10</span></td>
                                                <td><span>BAC+5</span></td>
                                                <td><span>Entre 2 et 5 ans</span></td>
                                                <td><span>17-06-2023</span></td>
                                                <td>
                                                    <FaPenAlt className='text-warning'/>
                                                    <FaTrashAlt className='text-danger ms-3'/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span>Développeur Front-End</span></td>
                                                <td><span>CDI</span></td>
                                                <td><span>10</span></td>
                                                <td><span>BAC+5</span></td>
                                                <td><span>Entre 2 et 5 ans</span></td>
                                                <td><span>17-06-2023</span></td>
                                                <td>
                                                    <FaPenAlt className='text-warning'/>
                                                    <FaTrashAlt className='text-danger ms-3'/>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offre