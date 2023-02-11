import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Amazon EMR on EKS',
        // Svg: require('@site/static/img/emr.svg').default,
        description: (
            <>
                Optimized Multi-Tenant Deployment of Amazon EMR on EKS Cluster with Best Practices using Karpenter Autoscaler and Apache YuniKorn Templates<br/>
            </>
        ),
    },
  {
    title: 'Data Analytics',
    // Svg: require('@site/static/img/spark.svg').default,
    description: (
      <div>
          Best Practice Data Analytics Deployment Templates and Examples for EKS with Apache Spark, Spark Operator, Dask, Beam, and More
      </div>
    ),
  },
  {
    title: 'AI/ML',
    // Svg: require('@site/static/img/ml.svg').default,
    description: (
      <>
          Unlocking Best Practices for AI/ML Deployment on EKS with KubeFlow, JupyterHub, and More
      </>
    ),
  },
    {
        title: 'Streaming Data Platforms',
        // Svg: require('@site/static/img/streaming.svg').default,
        description: (
            <>
                Building High-Scalability Streaming Data Platforms with Kafka, Flink, Spark Streaming, and More
            </>
        ),
    },
    {
        title: 'Schedulers',
        // Svg: require('@site/static/img/schedulers.svg').default,
        description: (
            <>
                Optimizing Job Scheduling on EKS with Apache Airflow, Amazon MWAA, Argo Workflow, and More
            </>
        ),
    },
    {
        title: 'Distributed Databases & Query Engines',
        // Svg: require('@site/static/img/distributed_databases.svg').default,
        description: (
            <>
                Constructing High-Performance, Scalable Distributed Databases and Query Engines with Cassandra, Trino, Presto, and More
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/*<div className="text--center">*/}
      {/*  <Svg className={styles.featureSvg} role="img" />*/}
      {/*</div>*/}
      <div className="text--center padding-horiz--md">
        <h2><b>{title}</b></h2>
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
