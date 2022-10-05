/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

// const playlist = {
//     name: 'My Playlist',
//     rating: 5,
//     tracks: ['track - 1',' track - 2', 'track - 3'],
//     trackCount: 3,

//     // метод объекта старая запись
// //     getName: function(){
// // console.log('This is get name function');
// //     },
    
    
// // ====== метод объекта новая запись
//         getName(a){
// console.log('This is get name function', a);
//     },

// }
// playlist.getName(5);



//  * - addTrack ==добавление == обновление

const playlist = {
    name: 'My Playlist',
    rating: 5,
    tracks: ['track - 1', ' track - 2', 'track - 3'],
    // trackCount: 3,
    changeName(newName) {
        // console.log('This is new name', this);
        this.name = newName;
    },

    addTrack(track) {
        this.tracks.push(track);

    // добавляем  на автоматическое обновления кол-ва треков
        // this.trackCount = this.tracks.length;
    },

    updateRating(rating) {
        this.rating = rating;
    },

    // убираем не нужный ключ и находим кол-во треков по длине массива
    getTrackCount() {
        return this.tracks.length;
    },
}

playlist.addTrack('New track-1');
playlist.addTrack('New track-2');
playlist.addTrack('New track-3');

console.log(playlist.getTrackCount(),'-Track(s) in playlist');

playlist.updateRating('Update rating-1');
playlist.changeName('New name');

console.log(playlist);