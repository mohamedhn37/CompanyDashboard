import React, { useState } from 'react'
import './Postulation.css'
import { FaEye, FaTimes } from 'react-icons/fa'

const Postulation = () => {

  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <h3>Candidatures d'offre 'Reference d'offre'</h3>
          </div>
          <div className="col-md-12 my-4">
            <div className="UserFormations">
              <div className="PostulationContent table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Infos Condidat</th>
                      <th>CV</th>
                      <th>Résponse</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <button className='btn btn-primary' onClick={togglePopup}>Voir les infos</button>
                        {isPopupVisible && (
                          <div className="popup">
                            <span className="close" onClick={togglePopup}><FaTimes /></span>
                            <div className="infosCondidatContent">
                              <h3 className='mb-4'>Infos Condidat</h3>
                              <div className="infosCondidat">
                                <h5>Nom Complet</h5>
                                <p>jhon doe</p>
                              </div>
                              <div className="infosCondidat">
                                <h5>Email</h5>
                                <p>jhon.doe@gmail.com</p>
                              </div>
                              <div className="infosCondidat">
                                <h5>Téléphone</h5>
                                <p>0600000000</p>
                              </div>
                              <div className="infosCondidat">
                                <h5>Adresse</h5>
                                <p>123, Avenue Mohammed VI, Casablanca 20000, Maroc</p>
                              </div>
                              <div className="infosCondidat">
                                <h5>Niveau d'étude</h5>
                                <p>Bac+3</p>
                              </div>
                              <div className="infosCondidat">
                                <h5>Les années Expérience</h5>
                                <p>Entre 1 et 2 ans</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </td>
                      <td>
                        <button className='btn btn-dark'><FaEye className='text-white' /></button>
                      </td>
                      <td>
                        <div className="reponse">
                          <textarea name="Reponse" id="Reponse" className="form-control" required rows={2} cols={4}></textarea>
                          <button className='btn btn-success ms-3'>Envoyer</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Postulation