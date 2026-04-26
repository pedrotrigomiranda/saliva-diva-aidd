const artists = [
  {
    name: "Mariana Camacho",
    image: "/assets/artist_mariana_camacho.jpeg",
    bandcampUrl:
      "https://salivadiva.bandcamp.com/album/o-tempo-de-baixo-o-tempo-de-cima-ou-o-mundo-est-a-girar",
    instagram: "https://www.instagram.com/mariana.b.camacho/",
    facebook: "",
    email: "",
    youtube: "https://www.youtube.com/@MarianaBCamacho",
    spotify:
      "https://open.spotify.com/artist/0Z1lcqTldi4DFv1oKSHVSZ?si=yjyDvZDXQNCgf-ZIrj08pQ",
  },
  {
    name: "Polivalente",
    image: "/assets/artist_polivalente.jpg",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/love-pt",
    instagram: "https://www.instagram.com/polivalent.e/",
    facebook: "",
    email: "",
    youtube: "https://www.youtube.com/channel/UC2QGQT_lLYJk1ZKvYn7onzg",
    spotify:
      "https://open.spotify.com/artist/2O4z6nBUcHGBK9U7U7OwvO?si=ZcOXFrV5Rs6JQPDP9hzTEw",
  },
  {
    name: "Mordo Mia",
    image: "/assets/artist_mordo_mia.jpeg",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/chumbo-c-ncavo",
    instagram: "https://www.instagram.com/mordo_mia/",
    facebook: "https://www.facebook.com/mordo.mia.banda",
    email: "mordo.mia.contacto@gmail.com",
    youtube: "https://www.youtube.com/@MordoMia",
    spotify:
      "https://open.spotify.com/artist/6OYaDOt8HG3Nhx8UunMGlT?si=gAFAXO4oSuGl2CNys0-_wQ",
  },
  {
    name: "Lesma",
    image: "/assets/artist_lesma.jpeg",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/mentira",
    instagram: "https://www.instagram.com/lesmabanda/",
    facebook: "",
    email: "",
    youtube: "https://www.youtube.com/@lesmabanda",
    spotify:
      "https://open.spotify.com/artist/4TO2ddrfzyMjvxWjoPuZge?si=1Qoa23O6QKWhrcRkLZYlOA",
  },
  {
    name: "Correr Andar",
    image: "/assets/artist_correrandar.jpeg",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/descer-para-cima",
    instagram: "https://www.instagram.com/correrandar/",
    facebook: "",
    email: "",
    youtube: "https://www.youtube.com/@correrandar7495",
    spotify:
      "https://open.spotify.com/artist/3klLY4hrvgIcmJmJumc4vL?si=HmTc2QjHQ8O8RgB6S4aBrQ",
  },
  {
    name: "Cortada",
    image: "/assets/artist_cortada.jpeg",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/g-nb-i",
    instagram: "https://www.instagram.com/cortada__/",
    facebook: "",
    email: "",
    youtube: "https://www.youtube.com/@CORTA_DA",
    spotify:
      "https://open.spotify.com/artist/0AmqhQm0uEdtKO6vJYn7yn?si=2b3mpEn9QaGtxGv_e2HdrQ",
  },
  {
    name: "Chat GRP",
    image: "/assets/artist_chat_grp.jpeg",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/chat-gr-e-p",
    instagram: "https://www.instagram.com/_chat.grp/",
    facebook: "https://www.facebook.com/",
    email: "",
    youtube: "https://www.youtube.com/",
    spotify:
      "https://open.spotify.com/artist/64ExE21AxFtZsPBOMAFreH?si=8Z80OPSrRiGUuRmKEH8BRw",
  },
  {
    name: "Sensor",
    image: "/assets/artist_sensor.jpg",
    bandcampUrl:
      "https://salivadiva.bandcamp.com/album/acrobatics-of-the-flesh",
    instagram: "https://www.instagram.com/ramrife/",
    facebook: "https://www.facebook.com/",
    email: "",
    youtube: "https://www.youtube.com/",
    spotify: "",
  },
  {
    name: "Splitterzelle",
    image: "/assets/artist_splitterzelle.jpg",
    bandcampUrl:
      "https://salivadiva.bandcamp.com/album/drumhard-sessions-vol-1",
    instagram: "https://www.instagram.com/splitterzelle/",
    facebook: "https://www.facebook.com/people/Splitterzelle/61558748120468/",
    email: "splitterzelle.band@gmail.com",
    youtube: "https://www.youtube.com/",
    spotify:
      "https://open.spotify.com/artist/3SzohuKmtJdLnMilZOBDsa?si=wmMqKxiwSnGZReF5ueWBzQ",
  },
  {
    name: "Ξvдyд",
    image: "/assets/artist_evaya.jpeg",
    bandcampUrl:
      "https://salivadiva.bandcamp.com/album/abaixo-das-ra-zes-deste-jardim",
    instagram: "https://www.instagram.com/evaya___/",
    facebook: "https://www.facebook.com/evayamusic",
    email: "agente@haushaus.pt",
    youtube: "https://www.youtube.com/@iforgotiwasme/",
    spotify:
      "https://open.spotify.com/artist/3QH6q9XnQDc8zXKJubY7FP?si=OrCtcvPmR-GYV-qOgJSUbA",
  },
  {
    name: "Galgo",
    image: "/assets/artist_galgo.jpeg",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/vapor",
    instagram: "https://www.instagram.com/galgogalgogalgo/",
    facebook: "https://www.facebook.com/galgogalgogalgo/?locale=pt_PT",
    email: "galgo.cinco@gmail.com",
    youtube: "https://www.youtube.com/@GalgoOficial/videos",
    spotify:
      "https://open.spotify.com/artist/64eOzQ6QML61ZxmirShdNV?si=nA6x8D6YTjOmEe0PgY-KoQ",
  },
  {
    name: "MONCHMONCH",
    image: "/assets/artist_monchmonch.jpeg",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/guardilha-espanca-tato",
    instagram: "https://www.instagram.com/monch_monch_/",
    facebook: "",
    email: "",
    youtube: "https://www.youtube.com/@monchmonch6272",
    spotify:
      "https://open.spotify.com/artist/0V1HM3Br0lGSSpOFNm7CJp?si=Zve4adWmSvG_bISZWjIXPQ",
  },
  {
    name: "Luís Contrário",
    image: "/assets/artist_luis_contrario.jpeg",
    bandcampUrl:
      "https://salivadiva.bandcamp.com/album/m-sicas-de-dan-a-para-pessoas-tristes",
    instagram: "https://www.instagram.com/luiscontrario",
    facebook: "",
    email: "",
    youtube: "https://www.youtube.com/@LuisContrario",
    spotify:
      "https://open.spotify.com/artist/4cKzyLlVgnIcpvReKCgD97?si=MDOFPJCDQj2uCRl2rVfNOg",
  },
  {
    name: "Marquise",
    image: "/assets/artist_marquise.jpg",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/marquise",
    instagram: "https://www.instagram.com/m.ar.qui.se/",
    facebook: "",
    email: "somososmarquise@gmail.com",
    youtube: "https://www.youtube.com/channel/UCrmAbGsZKBAmKPWsYcQ3TDw",
    spotify:
      "https://open.spotify.com/album/2ZlSaVEe3RVq8DszLuNzFX?si=P9cnlV0AS9aENeHwwUv8OQ",
  },
  {
    name: "Nile Valley",
    image: "/assets/artist_nile_valley.jpeg",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/floating-lines",
    instagram: "https://www.instagram.com/nilevalleyband/",
    facebook: "https://www.facebook.com/nilevalleyband/",
    email: "nilevalleymusicpt@gmail.com",
    youtube: "https://www.youtube.com/channel/UCF42RdykH5h1w5sTEEJL8EA",
    spotify:
      "https://open.spotify.com/artist/2NzXt0c7Yb8uiasuBQ767v?si=f6oi0Q4-RrG1sOzoZkiNgQ",
  },
  {
    name: "Palankalama",
    image: "/assets/artist_palankalama.jpg",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/lama-pela-anca",
    instagram: "https://www.instagram.com/palankalama/",
    facebook: "https://www.facebook.com/palankalama/",
    email: "",
    youtube: "https://www.youtube.com/channel/UCh3Vq9TTXkE7fsfwFxhQmjQ",
    spotify:
      "https://open.spotify.com/artist/2qadak2dXVVLHDpyfAuCVV?si=rLYKuS26SmSEvmTZC0tLCA",
  },
  {
    name: "Melquiades",
    image: "/assets/artist_melquiades.jpg",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/fountain-of-shingle",
    instagram: "https://www.instagram.com/melquiadesband/",
    facebook: "https://www.facebook.com/melquiadesband/",
    email: "",
    youtube: "https://www.youtube.com/channel/UCE1E5-dRL69_oWTttksu91A/",
    spotify:
      "https://open.spotify.com/artist/0SWnKKtr87ZnJwKclUwuM7?si=j7oQQauvSn22mJFfBcKEEA",
  },
  {
    name: "Fugly",
    image: "/assets/artist_fugly.jpg",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/dandruff",
    instagram: "https://www.instagram.com/fuglyfuglyfugly/",
    facebook: "https://www.facebook.com/fuglyfuglyfugly/",
    email: "",
    youtube: "https://www.youtube.com/channel/UCiA17QHA29eFaO0rg5p82Fg/",
    spotify:
      "https://open.spotify.com/artist/5CrUuS7NQvUeHwPFnzVKcS?si=77cuczFhTqGTAX0vlL-XQA",
  },
  {
    name: "Baleia Baleia Baleia",
    image: "/assets/artist_baleia.png",
    bandcampUrl: "https://salivadiva.bandcamp.com/track/egossistema",
    instagram: "https://www.instagram.com/baleia_baleia_baleia/",
    facebook: "https://www.facebook.com/Baleiax3/",
    email: "",
    youtube:
      "https://www.youtube.com/channel/UCCloJP65wVpQ-E8cek8g5KA/featured",
    spotify:
      "https://open.spotify.com/artist/1M66J2yfngcMDmYSLiAUe2?si=VgBQYfnfSpqqRKOBBhit-g",
  },
  {
    name: "Daniel Catarino",
    image: "/assets/artist_catarino.png",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/isolamento-volunt-rio",
    instagram: "",
    facebook: "https://www.facebook.com/catarinodaniel",
    email: "",
    youtube: "https://www.youtube.com/c/DanielCatarino",
    spotify:
      "https://open.spotify.com/artist/4viq1TlK4HK08LsQeInUwF?si=5E66ZJJ_TuSoQ0K4-KKIQQ",
  },
  {
    name: "O Manipulador",
    image: "/assets/artist_o_manipulador.png",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/doppler",
  },
  {
    name: "Palmiers",
    image: "/assets/artist_palmiers.png",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/palmiers",
  },
  {
    name: "The Miami Flu",
    image: "/assets/artist_the_miami_flu.png",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/reunion-day",
    instagram: "https://www.instagram.com/themiamiflu/",
    facebook: "https://pt-pt.facebook.com/themiamiflu/",
    email: "info@miamiflu.com",
    youtube: "https://www.youtube.com/channel/UCF6n5p_m-c8nP0CSsayj91Q",
    spotify:
      "https://open.spotify.com/artist/582sJBlIOnWBuEd0wxzkvb?si=bDY8DJNMRECsYWDKtp2BBA",
  },
  {
    name: "Tiago e os Tintos",
    image: "/assets/artist_tiago_e_os_tintos.png",
    bandcampUrl: "https://salivadiva.bandcamp.com/album/o-ecoar-duma-sirene",
  },
];

export default artists;