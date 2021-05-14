import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Built for OAuth2',
    imagePath: "/img/oauth2.png",
    // Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <code>sttp-oauth2</code> supports following following grant types: Authorization code, Password grant, Client credentials
      </>
    ),
  },
  {
    title: 'Powered by Scala',
    imagePath: "/img/scala.png",
    // Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Created entirely in Scala with <a href="https://github.com/softwaremill/sttp">sttp</a>.
        Designed with ZIO and Cats Effect integration in mind.
      </>
    ),
  },
  {
    title: 'Ocado Technology',
    imagePath: "/img/ocado.png",
    // Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Brought to you by <a href="https://github.com/ocadotechnology/">Ocado Technology</a>.
      </>
    ),
  },
];

function Feature({imagePath, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
        <img src={imagePath} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
