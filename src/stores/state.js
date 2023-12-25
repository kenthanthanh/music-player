const songs = [
    {
      title: "Chờ Đợi Có Đáng Sợ",
      singer: "ANDIEZ",
      src: "src/assets/playlists/y2mate.com - CHỜ ĐỢI CÓ ĐÁNG SỢ  ANDIEZ  OFFICIAL MV.mp3",
      poster: "src/assets/img/chờ đợi có đáng sợ.jpg",
    },
    {
      title: "Bóng Phù Hoa",
      singer: "Phương Mỹ Chi x DTAP",
      src: "src/assets/playlists/y2mate.com - PHƯƠNG MỸ CHI x DTAP  BÓNG PHÙ HOA  OFFICIAL VISUALIZER.mp3",
      poster: "src/assets/img/bóng phù hoa.jpg",
    },
    {
      title: "Thêm Bao Nhiêu Lâu",
      singer: "Đạt G",
      src: "src/assets/playlists/y2mate.com - Thêm Bao Nhiêu Lâu  Đạt G  OFFICIAL MV.mp3",
      poster: "src/assets/img/thêm bao nhiêu lâu.jpg",
    },
    {
      title: "Từng Quen",
      singer: "Wren EVans x Freak D",
      src: "src/assets/playlists/y2mate.com - Từng Quen Lofi Ver  Wren Evans x Freak D.mp3",
      poster: "src/assets/img/từng quen.jpg",
    },
    {
      title: "Nàng Thơ Xứ Huế",
      singer: "Thùy Chi",
      src: "src/assets/playlists/y2mate.com -  Nàng Thơ Xứ Huế  Thùy Chi  Theme Song From Nàng thơ xứ Huế Series.mp3",
      poster: "src/assets/img/nàng thơ xứ huế.jpg",
    },
    {
      title: "Remember Our Summer",
      singer: "Frogmonster",
      src: "src/assets/playlists/y2mate.com - Frogmonster  Remember Our Summer Official Audio.mp3",
      poster: "src/assets/img/remember our summer.jpg",
    },
    {
      title: "Lâu Lâu Nhắc Lại",
      singer: "Hà Nhi ft Khói",
      src: "src/assets/playlists/y2mate.com - L U L U NHẮC LẠI  Hà Nhi ft Khói  Official Music Video.mp3",
      poster: "src/assets/img/lâu lâu nhắc lại.jpg",
    },
    {
      title: "Lưu Luyến Sau Chia Tay",
      singer: "Try92 ft Kai06 ",
      src: "src/assets/playlists/y2mate.com - Lưu Luyến Sau Chia Tay  Try92 ft Kai06  Official Lyrics Video.mp3",
      poster: "src/assets/img/lưu luyến sau chia tay.jpg",
    },
    {
      title: "Aurora",
      singer: "K391",
      src: "src/assets/playlists/y2mate.com - K391  RØRY  Aurora Lyrics.mp3",
      poster: "src/assets/img/aurora.jpg",
    },
    {
      title: "Bông Hoa Đẹp Nhất",
      singer: "Quân AP",
      src: "src/assets/playlists/y2mate.com - QU N AP  BÔNG HOA ĐẸP NHẤT  OFFICIAL MUSIC VIDEO.mp3",
      poster: "src/assets/img/bông hoa đẹp nhất.jpg",
    },
    {
      title: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
      singer: "Ái Phương ft Trúc Nhân",
      src: "src/assets/playlists/y2mate.com - Tôi Thấy Hoa Vàng Trên Cỏ Xanh  Ái Phương  Yeah1 Superstar Offical MV.mp3",
      poster: "src/assets/img/tôi thấy hoa vàng trên cỏ xanh.jpg",
    },
    {
      title: "Xin Chào Việt Nam (Violin)",
      singer: "JMI KO",
      src: "src/assets/playlists/y2mate.com - Xin Chào Việt Nam  Nghệ sỹ Violin JMI KO  Official MV  Nhạc trẻ hay mới nhất.mp3",
      poster: "src/assets/img/hello việt nam.jpg",
    },
    {
      title: "Xin Chào Việt Nam",
      singer: "Thùy Chi",
      src: "src/assets/playlists/y2mate.com - HD Chào Việt Nam  Thùy Chi  Hello Viet Nam.mp3",
      poster: "src/assets/img/xin chào vn.jpg",
    },
  ];
  
  
  export default {
    songs,
    currentIndex: 0,
    current: {},
    isRandom: false,
    isRepeat: false,
    isPlaying: false,
    config: {},
    player: new Audio(),
  };
  
  
  