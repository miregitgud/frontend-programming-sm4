/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
// CODE HERE
import users from "../data/users.js"

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */
const formatUser = (title) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const formattedName = users.map((user) => {
          return {
            name: `${title} ${user.name}`,
            age: user.age,
            major: user.major,
          };
        });
        if (users) {
            resolve(formattedName);
        }if (!users) {
            reject(`Data invalid.`)
        }
      }, 3000);
    });
  }

/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
const findByName = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundUser = users.find((user) => user.name === name)
            if (foundUser) {
                resolve(foundUser);
            } if (!foundUser) {
                reject(`User dengan nama ${name} tidak ditemukan, mohon lakukan pengecekan input dan coba lagi.`)
            }
        }, 2000);
    })
};

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
const filterByMajor = (major) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const filteredUser = users.filter((user) => user.major === major)
            if (filteredUser) {
                resolve(filteredUser);
            }if (!filteredUser) {
                reject(`User dengan major ${major} tidak ditemukan, mohon lakukan pengecekan input dan coba lagi.`)
            }
        }, 4000);
    })
};

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE
export { formatUser, findByName, filterByMajor };