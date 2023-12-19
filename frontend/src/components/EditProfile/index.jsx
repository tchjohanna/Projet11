import { useForm } from "react-hook-form";
import "./editProfile_module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { userSelector, clearState, updateUserBytoken, fetchUserBytoken } from "../../features/UserSlices";

function EditProfile({ token }) {
  // Utilisation de react-hook-form pour gérer le formulaire
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [visible, setVisible] = useState('close');
  const [message, setMessage] = useState("");
  const setCollapse = () => {
    // Fonction pour afficher ou masquer le formulaire d'édition du nom d'utilisateur
    setVisible(visible === 'close' ? 'open' : 'close');
    setMessage('');
  }
  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError, errorMessage, username, firstname, lastname } = useSelector(userSelector);

  // Utilisation de useEffect pour charger les données de l'utilisateur lors du chargement du composant
  useEffect(() => {
    dispatch(fetchUserBytoken({ token: token }));
    dispatch(clearState());
  }, [dispatch, token]);

  // Fonction de soumission du formulaire
  const onSubmit = async (data) => {
    dispatch(updateUserBytoken(data));
  };

  useEffect(() => {
    return () => {
      // Nettoyage des données du composant lorsque celui-ci est démonté
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      // Gestion des erreurs
      console.log(errorMessage);
      dispatch(clearState());
    }

    if (isSuccess) {
      // Gestion de la réussite de la mise à jour du nom d'utilisateur
      dispatch(clearState());
      setMessage("User name updated !");
    }
  }, [dispatch, isError, isSuccess, errorMessage, setMessage]);

  return (
    <section className="profile">
      <>
        <div className="header">
          <h1>Welcome back<br />{firstname} {lastname} !</h1>
          <button className="edit-button" onClick={() => setCollapse()}>Edit Name</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={`whiteBackground collapse ${visible}`}>
          <div className="input-wrapper">
            <label htmlFor='userName'>User name</label>
            <input 
              type="text" 
              id='userName' 
              name='userName'
              placeholder={username}
              {...register("userName", { required: true })} 
              defaultValue={username} 
            />
            {errors.userName && <span>This field is required</span>}
          </div>
          <div className="input-wrapper">
            <label htmlFor='firstName'>First name</label>
            <input    
              type="text" 
              id='firstName' 
              name='firstName'
              disabled 
              defaultValue={firstname}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor='lastName'>Last name</label>
            <input 
              type="text" 
              id='lastName' 
              name='lastName'
              disabled 
              defaultValue={lastname}
            />
          </div>
          <p>{message}</p>
          <div className="button-group">
            <button type="submit" className="sign-in-button">Save</button>
            <button type="reset" className="sign-in-button" onClick={() => setCollapse()}>Cancel</button>
          </div>
        </form>
      </>
    </section>
  );
  
}

export default EditProfile;
