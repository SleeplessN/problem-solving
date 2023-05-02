function solution(genres, plays) {
  let result = [];
  const songs = genres.map((genre, index) => {
    return {
      no: index,
      genre: genre,
      play: plays[index],
    };
  });

  const genrePlayCnt = [];
  songs.forEach((song) => {
    const thisGenre = genrePlayCnt.find(
      (genrePlay) => genrePlay.genre === song.genre
    );
    if (!thisGenre) {
      genrePlayCnt.push({
        genre: song.genre,
        play: song.play,
      });
    } else {
      thisGenre.play += song.play;
    }
  });
  genrePlayCnt.sort((a, b) => b.play - a.play);

  genrePlayCnt.forEach((genrePlay) => {
    const thisGenreSongs = songs.filter(
      (song) => song.genre === genrePlay.genre
    );
    thisGenreSongs.sort((a, b) => b.play - a.play);
    result.push(thisGenreSongs[0].no);
    if (thisGenreSongs.length > 1) result.push(thisGenreSongs[1].no);
  });

  return result;
}

let input = [
  // TC: 1
  [
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
