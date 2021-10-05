import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.scss';

const Section = ({title, children}) => {
    return (
        <section className={styles.sectionContainer}>
            <h2 className={styles.title}>{title}</h2>
            { children }
        </section>
    )
};

export default Section;

Section.defaultProps = {
    title: " ",
}

Section.propTypes ={
    title: PropTypes.string,
}
