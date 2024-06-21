import Gallery from '../../components/Gallery';
import Banner from '../../components/Banner';
import HomeBanner from '../../assets/home-banner.png';

function Home() {
  return (
    <>
      <Banner
        image={HomeBanner}
        text="Chez vous, partout et ailleurs"
        isDarkened={true}
        page="home"
      />
      <Gallery />
    </>
  );
}

export default Home;
