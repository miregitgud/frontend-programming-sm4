import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";
import Button from "../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../../features/movies";

const AddMovieForm = (props) => {

        // destructuring props

        // handle multiple input with 1 state
        // membuat state formData
        // nilai state menggunakan object
        const [ formData, setFormData ] = useState({
            title: "",
            date: "",
            image: "",
            genre: "",
        });

        // Membuat state: isTitleError, isDateError
        const [isTitleError, setIsTitleError] = useState(false);
        const [isDateError, setIsDateError] = useState(false);
        const [isImageError, setIsImageError] = useState(false);
        const [isGenreError, setIsGenreError] = useState(false);

        const handleChange = (e) => {
            const { name, value } = e.target;

            setFormData({
                ...formData,
                [name]: value,
            });
        }

        const { title, date, image, genre} = formData;

        // fungsi validasi form
        const validate = () => {  

        // Jika date, title, image, dan select kosong, set semuanya true
        if (date === "" && title === "" && image === "" && genre === "") {
            setIsTitleError(true);
            setIsDateError(true);
            setIsImageError(true);
            setIsGenreError(true);
            return false;
        }
        // Jika title kosong, set isTitleError true
        else if (title === "") {
            setIsTitleError(true);
            return false;
        }
        // Jika date kosong, set isDateError true
        else if (date === "") {
            setIsDateError(true);
            return false;
        }
        // Jika image kosong, set isImageError true
        else if (image === "") {
            setIsImageError(true);
            return false;
        }
        // Jika genre kosong, set isGenreError true
        else if (genre === "") {
            setIsGenreError(true);
            return false;
        }
        // Jika semuanya sudah memiliki input yang valid, maka push movie dan set semua error menjadi false
        else {
            setIsTitleError(false);
            setIsDateError(false);
            setIsImageError(false);
            setIsGenreError(false);
            return true;
        }
    }

        const navigation = useNavigate();
        const dispatch = useDispatch();

        // membuat fungsi addmovie
        const submitMovie = () => {
            
            const movie = {
                id: nanoid(10),
                title: title,
                year: date,
                type: genre,
                poster: image,
             };
    
        // SOLVED: HOW TO ADD MOVIE TO MOVIES :)

        dispatch(addMovie(movie))
        navigation("/");
        }

        // membuat fungsi handleSubmit
        const handleSubmit = (e) => {
            // mencegah value untuk kembali menjadi default
            e.preventDefault();          
            validate() && submitMovie();
  }

    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img className={styles.form__image}
                    src='https://picsum.photos/536/354'
                    alt='placeholder' />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.addmovieform__title}>Add Movie</h2>
                    <form onSubmit={handleSubmit}>

                        <div className={styles.addmovieform}>
                            <input onChange={handleChange} className={styles.addmovieform__input} type="text" placeholder="Title" id="title" name="title" value={title} />
                            {isTitleError && <Alert>Title can't be empty!</Alert>}
                        </div>
                        
                        <div className={styles.addmovieform}>
                            <input onChange={handleChange} className={styles.addmovieform__input} type="number" placeholder="Date" id="date" name="date" value={date} />
                            {isDateError && <Alert>Date can't be empty!</Alert>}
                        </div>

                        <div className={styles.addmovieform}>
                            <input onChange={handleChange} className={styles.addmovieform__input} type="text" placeholder="Image URL" id="image" name="image" value={image} />
                            {isImageError && <Alert>Image can't be empty!</Alert>}
                        </div>

                        <div className={styles.addmovieform}>
                            <select onChange={handleChange} name="genre" value={genre} className={styles.addmovieform__genre}>
                            <option value="" disabled selected hidden>Genre</option>
                            <option value="Horror">Horror</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Slice of Life">Slice of Life</option>
                            <option value="Action">Action</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            </select>
                            {isGenreError && <Alert>A genre must be chosen!</Alert>}
                        </div>

                        <div>
                            <Button size="lg" full>Submit Movie</Button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm;