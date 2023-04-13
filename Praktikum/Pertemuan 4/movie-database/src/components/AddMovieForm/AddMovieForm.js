import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";

const AddMovieForm = (props) => {

        // destructuring props
        const { movies, setMovies } = props;

        // membuat state title
        const [title, setTitle] =  useState("");

        // membuat state date
        const [date, setDate] = useState("");

        // membuat state image 
        const [image, setImage] = useState("");

        // membuat state select
        const [genre, setGenre] = useState("");

        // Membuat state: isTitleError, isDateError
        const [isTitleError, setIsTitleError] = useState(false);
        const [isDateError, setIsDateError] = useState(false);
        const [isImageError, setIsImageError] = useState(false);
        const [isGenreError, setIsGenreError] = useState(false);
       
        // membuat fungsi handleTitle
        const handleTitle = (e) => {
            setTitle(e.target.value);
        }

        // membuat fungsi handleDate
        const handleDate = (e) => {
            setDate(e.target.value);
        }

        // membuat fungsi handleImageURL
        const handleImageURL = (e) => {
            setImage(e.target.value);
        }

        const handleGenre = (e) => {
            setGenre(e.target.value);
        }

        // membuat fungsi handleSubmit
        const handleSubmit = (e) => {
            // mencegah value untuk kembali menjadi default
            e.preventDefault();


        // Jika date, title, image, dan select kosong, set semuanya true
        if (date === "" && title === "" && image === "" && genre === "") {
            setIsTitleError(true);
            setIsDateError(true);
            setIsImageError(true);
            setIsGenreError(true);
        }
        // Jika title kosong, set isTitleError true
        else if (title === "") {
            setIsTitleError(true);
        }
        // Jika date kosong, set isDateError true
        else if (date === "") {
            setIsDateError(true);
        }
        // Jika image kosong, set isImageError true
        else if (image === "") {
            setIsImageError(true);
        }
        // Jika genre kosong, set isGenreError true
        else if (genre === "") {
            setIsGenreError(true);
        }                      

        // Jika semuanya sudah memiliki input yang valid, maka push movie dan set semua error menjadi false
        else {
            const movie = {
            id: nanoid(10),
            title: title,
            year: date,
            type: genre,
            poster: image,
         };

    // SOLVED: HOW TO ADD MOVIE TO MOVIES :)
    setMovies([...movies, movie]);

    setIsTitleError(false);
    setIsDateError(false);
    setIsImageError(false);
    setIsGenreError(false);
  }
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
                            <input onChange={handleTitle} className={styles.addmovieform__input} type="text" placeholder="Title" id="title" name="title" value={title} />
                            {isTitleError && <Alert>Title can't be empty!</Alert>}
                        </div>
                        
                        <div className={styles.addmovieform}>
                            <input onChange={handleDate} className={styles.addmovieform__input} type="number" placeholder="Date" id="date" name="date" value={date} />
                            {isDateError && <Alert>Date can't be empty!</Alert>}
                        </div>

                        <div className={styles.addmovieform}>
                            <input onChange={handleImageURL} className={styles.addmovieform__input} type="text" placeholder="Image URL" id="image" name="image" value={image} />
                            {isImageError && <Alert>Image can't be empty!</Alert>}
                        </div>

                        <div className={styles.addmovieform}>
                            <select onChange={handleGenre} value={genre} className={styles.addmovieform__genre}>
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
                            <button className={styles.addmovieform__button}>Submit Movie</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm;