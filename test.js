

users:
    id: num
    username: str
    class: class.id
    points: num
    lv: num


classes:
 className:
 classbouns:
 classId:


combat:
    player1:fk user.id
    player2: fk  user.id
    state: str/enum


animesWatched:
    animeId:
    animeName:
    timeWatched:
    animeMsg:
    animeRating: 4.5/10


    Anime
    anime_id
    name

AnimeMessage
    message_id
    anime_id

AnimeRatings
    anime_id
    user_id
    rating