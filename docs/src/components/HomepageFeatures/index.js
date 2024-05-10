import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Music everywhere',
      Img: require('@site/static/img/everywhere.png').default,
    description: (
      <>
        Hear your music everywhere! On your desktop, mobile and car!
      </>
    ),
  },
  {
    title: 'Modern technologies',
      Img: require('@site/static/img/technologies.png').default,
    description: (
      <>
        Micanto is built on the latest technologies. It uses, laravel, react, tailwind and docker.
      </>
    ),
  },
  {
    title: 'Open source',
      Img: require('@site/static/img/opensource.png').default,
    description: (
      <>
        Everybody can contribute, add features, report bugs.
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
          <img src={Img}/>
        {/*<Svg className={styles.featureSvg} role="img" />*/}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
