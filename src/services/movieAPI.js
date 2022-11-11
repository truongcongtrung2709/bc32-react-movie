// Setup các hàm xử lý API liên quan đến movie

import fetcher from "./fetcher";

const movieAPI = {
  getBanners:  () => {
    
    return fetcher.get("QuanLyPhim/LayDanhSachBanner");
  },

  getMovies: async () => {
    return fetcher.get("QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP01",
      },
    });
  },

  getMovieDetails: (movieId) => {
    return fetcher.get("QuanLyPhim/LayThongTinPhim", {
      params: {
        maPhim: movieId,
      },
    });
  },
};

export default movieAPI;
