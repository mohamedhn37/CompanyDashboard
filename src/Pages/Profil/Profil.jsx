import React, { useRef, useState } from 'react'
import './Profil.css'
import { FaEye, FaMinusCircle, FaPlusCircle } from 'react-icons/fa'


const Profil = () => {

  /*pour controller l'affichage du div introduction*/
  const [showInroContent, setShowIntroContent] = useState(true);
  const toggleIntroContent = () => {
    setShowIntroContent(!showInroContent);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="CondidatInfo">
              <img src="https://placehold.co/600x600" alt="UserImg" />
              <h4>Nom De Société</h4>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row mt-3 mb-5">
              <div className="col-md-12">
                <div className="sectionTitle my-3">
                  <h5>Description</h5>
                  <span onClick={toggleIntroContent}>
                    {showInroContent ? <FaMinusCircle className='ms-2' /> : <FaPlusCircle className='ms-2' />}
                  </span>
                </div>
                {showInroContent && (
                  <div className="UserFormations">
                    <div className='Introduction'>
                      <div className="row my-3">
                        <div className="col-md-12">
                          <label htmlFor="Description" className='form-label'>A propos de société <span className='text-danger'>*</span></label>
                          <textarea name="Description" id="Description" className="form-control" required rows={10}></textarea>
                        </div>
                      </div>
                      <button className='btn btn-primary'>Enregistrer</button>
                    </div>
                  </div>
                )}
              </div>
            </div> 
          </div>
          <div className="col-md-5">
            <div className="UserFormations">
              <div className="row my-2">
                <div className="col-md-12">
                  <div className="InfosPersonnel">
                    <div className="sectionTitle my-3">
                      <h5>Infos de société</h5>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="NomSociété" className='form-label'>Nom de société<span className='text-danger'>*</span></label>
                      <input type='text' id="NomSociété" required className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="Adresse" className='form-label'>Adresse<span className='text-danger'>*</span></label>
                      <input type='text' id="Adresse" required className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="Phone" className='form-label'>téléphone<span className='text-danger'>*</span></label>
                      <input type='text' id="Phone" required className="form-control" placeholder='0600000000/0500000000' />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row my-2">
                <div className="col-md-12">
                  <div className="Secteur">
                    <div className="sectionTitle my-3">
                      <h5>Secteur du Travaille</h5>
                    </div>
                    <select id="Secteur" name="Secteur" title="Choisir un Secteur" className="form-select">
                      <option value="Choisir un Secteur">Secteur</option>
                      <option value="1">Achats</option><option value="2">Administratif</option>
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
              <hr />
              <div className="row my-2">
                <div className="col-md-12">
                  <div className="ReseauxSociaux">
                    <div className="sectionTitle my-3">
                      <h5>Réseaux sociaux</h5>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="WebSite" className='form-label'>WebSite URL</label>
                      <input type='text' id="WebSite" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="LinkedIn" className='form-label'>LinkedIn</label>
                      <input type='text' id="LinkedIn" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="Twitter" className='form-label'>Twitter</label>
                      <input type='text' id="Twitter" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="Facebook" className='form-label'>Facebook</label>
                      <input type='text' id="Facebook" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="Instagram" className='form-label'>Instagram</label>
                      <input type='text' id="Instagram" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <button className='btn btn-primary my-3'>Enregistrer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profil