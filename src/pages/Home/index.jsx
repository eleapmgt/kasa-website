import Gallery from '../../components/Gallery';
import Banner from '../../components/Banner';
import HomeBanner from '../../assets/home-banner.png';

function Home() {
  return (
    <div>
      <Banner
        image={HomeBanner}
        text="Chez vous, partout et ailleurs"
        isDarkened={true}
      />
      <Gallery />
    </div>
  );
}

export default Home;
