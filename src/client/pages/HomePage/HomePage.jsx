import Section from '../../../shared/components/Section';

import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <Section>
            <div className={styles.container}>
                <h1 className={ styles.title}>Welcome  to  Todos app!</h1>
            </div>
        </Section> 
    )
};

export default HomePage;
