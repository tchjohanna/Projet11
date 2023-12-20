import { useNavigate } from 'react-router-dom';
import './signIn_module.scss';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState } from '../../features/UserSlices';
import { useEffect } from 'react';

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Utilisation de react-hook-form pour gérer le formulaire
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Récupération du token depuis le stockage local
  let token = localStorage.getItem('token');

  // Sélection des états liés à l'authentification depuis le Redux store
  const { isSuccess, isError, errorMessage } = useSelector(userSelector);

  // Fonction de soumission du formulaire
  const onSubmit = (data) => {
    console.log(data)
    dispatch(loginUser(data));
  };

  // Utilisation de useEffect pour nettoyer les données du composant lorsque celui-ci est démonté
  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  // Gestion des erreurs et redirection après une connexion réussie
  useEffect(() => {
    if (isError) {
      console.log(errorMessage);
      dispatch(clearState());
    }
    if (isSuccess && token != null) {
      dispatch(clearState());
      navigate('/user'); // Redirection vers la page utilisateur après la connexion réussie
    }
  }, [dispatch, isError, isSuccess, errorMessage, navigate, token]);
  
  // Récupération des valeurs de l'email et du mot de passe depuis le stockage local
  let rmb = {
    'email': localStorage.getItem('email'),
    'password': localStorage.getItem('psw'),
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <div className="input-wrapper">
            <label htmlFor='email'>Email</label>
            <input 
              type="email" 
              id='email' 
              name='email'
              {...register("email", { required: true })} 
              defaultValue={rmb.email}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="input-wrapper">
            <label htmlFor='password'>Password</label>
            <input 
              type="password" 
              id='password'
              name='password' 
              {...register("password", { required: true })}
              defaultValue={rmb.password}
            />
            {errors.password && <span>This field is required</span>}
          </div>
          <div className="input-remember">
            <input type='checkbox' id='remember-me' {...register("remember")} />
            <label htmlFor='remember-me'>Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
