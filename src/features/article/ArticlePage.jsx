import styles from './ArticlePage.module.css';

//  A simple component to show an article, no need for any data fetching for this one
export default function ArticlePage() {
  return (
    <div className={styles.article}>
      <h1 className={styles.headingPrimary}>Why Should you have a cat?</h1>

      <p className={styles.paragraph}>
        Owning a cat is a rewarding experience, as they provide both comfort and
        playful companionship. Cats are independent yet affectionate with their
        owners and trusted individuals.
      </p>
      <h2 className={styles.headingSecondary}>Why cats make great pets</h2>
      <p className={styles.paragraph}>
        The versatility of cat ownership is one reason why so many people enjoy
        feline companionship. Cats make great pets whether you live in a big
        house or tiny apartment, and they provide all the fun and play of larger
        animal companions. If you’re thinking of owning a cat, these are some of
        the key benefits:
      </p>
      <ul>
        <li className={styles.listItem}>
          <p>
            <strong>Cats are low maintenance.</strong> Maybe cats’ most alluring
            quality is that they are lower maintenance and cost less than dogs,
            who need walking, training, frequent grooming, and more toys and
            attention. Cats are also perfect for apartments or city living. They
            don’t need tons of space to play and explore—nosing their way
            through the nooks and crannies of your kitchen will keep them
            occupied for hours.
          </p>
        </li>
        <li className={styles.listItem}>
          <p>
            <strong>They’re quiet.</strong> Cats tend to meow when they’re
            hungry, but you rarely have to worry about being woken up or
            distracted from a task by a cat begging for attention. This makes
            them an ideal pet if you’re working from home or have youngsters
            napping during the day, for example.
          </p>
        </li>
        <li className={styles.listItem}>
          <p>
            <strong>They’re independent.</strong> A cat will be there for you
            when you need them but they’re also perfectly adept at entertaining
            themselves. Most don’t need—or want—constant attention and you’ll
            never have to endure guilt-inducing puppy eyes from a cat.
          </p>
        </li>
        <li className={styles.listItem}>
          <p>
            <strong>They keep your house pest-free.</strong> You probably
            already know that cats like to hunt rodents. But they’re also
            natural insect killers, too, offering the kind of household
            protection that Venus flytraps promise but rarely deliver. Many cats
            thoroughly enjoy exterminating bugs such as house flies and spiders,
            almost like they’re being paid for it.
          </p>
        </li>
        <li className={styles.listItem}>
          <p>
            <strong>They have long life spans.</strong> YThe most difficult
            stage of pet ownership is parting with your beloved companion. While
            you’re still likely to outlive a cat, their longer lifespans mean
            you’ll get to have more time with them—up to 20 years, in fact.
          </p>
        </li>
      </ul>
      <h2 className={styles.headingSecondary}>The health benefits of cats</h2>
      <p className={styles.paragraph}>
        While owning any pet can provide a myriad of health benefits, there are
        some benefits that are specific to cats. They can:
      </p>
      <ul>
        <li className={styles.listItem}>
          <p>
            <strong>Lower stress and anxiety.</strong> Cat owners know how one
            session of petting or playing with their cat can turn a bad day into
            a good one. Scientific evidence also shows that a cat’s purr can
            calm your nervous system and lower your blood pressure.
          </p>
        </li>
        <li className={styles.listItem}>
          <strong>Improve your cardiovascular health.</strong> Cat owners have
          been reported to carry a lower risk for heart disease and stroke.
        </li>
        <li className={styles.listItem}>
          <p>
            <strong>Prevent allergies.</strong> You always hear about cat hair
            being one of the most common allergens. However, if a child is
            exposed to cats within the first few years of life, they are more
            likely to develop an immune system that combats not only cat
            allergies but other kinds of allergens as well.
          </p>
        </li>
        <li className={styles.listItem}>
          <p>
            <strong>Reduce feelings of loneliness.</strong> Cats make great
            companion animals. They offer an unconditional love that can be
            equal to (or sometimes even greater than) many human friends and
            confidants.
          </p>
        </li>
      </ul>
      {/* directs to the source of the article */}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm"
        className={styles.source}
      >
        Read more
      </a>
    </div>
  );
}
