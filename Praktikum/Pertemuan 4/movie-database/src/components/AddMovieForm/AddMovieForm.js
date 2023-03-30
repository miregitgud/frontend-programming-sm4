import styles from "./AddMovieForm.module.css";

const AddMovieForm = () => {
    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img className={styles.form__image}
                    src='https://picsum.photos/536/354'
                    alt='placeholder' />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Add Movie</h2>
                    <form className={styles.addmovieform} action="/handlelogin">
                        <input type="text" id="addmovieform__title" name="addmovieform__title" value="" /><br />
                        <input type="text" id="addmovieform__date" name="addmovieform__date" value="" /><br />
                        <input className={styles.form__button} type="submit" value="Submit" />
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm;