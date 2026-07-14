const CONFIG = {
    // 1. Thông tin màn hình khoá
    sender: `Anh `,           // Tên người gửi
    recipient: `Em iu`,       // Tên người nhận
    pinCode: `0000`,            // Mật khẩu 4 số để mở khoá thiệp

    // 2. Nội dung thiệp
    title: `To my love`,        // Tiêu đề chính (hiển thị trên vỏ thiệp và popup thư)
    cardCoverDeco: `✿ ❤ ✿`,      // Dòng trang trí nhỏ phía trên tiêu đề
    forYouLine: `Gửi yêu thương đến em iu ❤`, // Dòng chữ hiển thị khi hoa rơi

    // 3. Nội dung bức thư (Mỗi dòng là một đoạn văn)
    popupMessage: `Chúc mừng sinh nhật người anh yêu nhá.💕💕💕                                                  Cảm ơn em đã đến là làm cho cuộc sống của anh thêm ý nghĩa hơn.Anh mong em luôn mạnh khỏe,vui vẻ,hạnh phúc,và mọi điều tốt đẹp nhất sẽ đến với em.tui răng chung mik đang yêu xa nhưng mà anh hi vọng rằng chúc mình luôn đồng hành,yêu thương và chia sẻ cho nhau những khoảng khắc trong cuộc sống nháaa. Và cuối cùng anh chúc em có 1 ngày sinh Nhật thật đáng chớ. Anh yêu em nhìuuuu🎂🎉💝`.split('\n'),

    // 4. Hình ảnh (Lưu ảnh vào thư mục images/ và điền tên file vào đây)
    images: [],

    // 5. Ảnh nổi bật hiển thị bên trong bức thư
    popupPhoto: `./assets/user_popupPhoto.jpg`, 

    // 6. Nhạc nền (Link file MP3)
    music: `./assets/user_music.mp3`,
};

