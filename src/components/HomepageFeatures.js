import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "For front-end project",
    Svg: require("../../static/img/undraw_mobile_prototyping_grmd.svg").default,
    // description:
    //   "所见即所得地设计您的网页，您输出的设计工作具备一切既有的前端工程性能优化。",
    // description:
    //   "WYSIWYG design your web page, your output design work has all the existing front-end engineering performance optimization.",
    description:
      "edit the overall UI of a front-end project (not html module). The combination and nesting of react modules in a front-end project may be very complicated and uncertain. This editor saves you the work of moving html modules to actual front-end projects. ",
    //This editor for front-end projects instead of html modules smooths out this uncertainty and save...
  },
  {
    title: "Adapt to multiple variant states",
    Svg: require("../../static/img/undraw_processing_thoughts_d8ha.svg").default,
    // description: '您可以构建完备的自适应web用户界面。包括Responsive，Hover, Focus, 和其它 States。'
    description:
      "You can build a complete adaptive web user interface. Including Responsive, Hover, Focus, and other States",
  },
  {
    title: (
      <>
        {"Powered by React/"}
        <a href="https://github.com/benjamn/recast">recast</a>
      </>
    ),
    Svg: require("../../static/img/undraw_react_y7wq.svg").default,
    description: `
      Derealize can modify your jsx code non-destructively, without destroying the existing code style.
      Unless you specify the prettier configuration you want.
    `,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={styles.h3}>{title}</h3>
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
