import Image from "next/image";
import styles from "../../styles/faq.module.css";

export default function Faq() {
  return (
    <>
      <div class={styles.containerquestion}>
        <div className={styles.title}>
          <div className={styles.element}>
            <h1>FAQ</h1>
          </div>
        </div>
        <div class={styles.tabs}>
          <div class={styles.tab}>
            <input type="checkbox" id="chck3" />
            <label class={styles.tablabelfirst} for="chck3">
              Can I ?
            </label>
            <div class={styles.tabcontentfirst}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              quia ipsam error consequatur itaque commodi facilis officiis
              nostrum doloribus, corrupti cumque. Minus vero tenetur sint
              voluptates vel architecto libero id?
            </div>
          </div>
        </div>
        <div class={styles.tabs}>
          <div class={styles.tab}>
            <input type="checkbox" id="chck2" />
            <label class={styles.tablabel} for="chck2">
              Can i use ?
            </label>
            <div class={styles.tabcontent}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              enim recusandae dicta quas earum deserunt similique hic accusamus
              dolores expedita, sunt totam accusantium eveniet ipsa quasi
              nesciunt quae, numquam ea?
            </div>
          </div>
        </div>
        <div class={styles.tabs}>
          <div class={styles.tab}>
            <input type="checkbox" id="chck4" />
            <label class={styles.tablabel} for="chck4">
              Why we are the winners?
            </label>
            <div class={styles.tabcontent}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              dolorem magni sapiente dolorum a labore assumenda quisquam, illum,
              veniam fuga aspernatur laboriosam doloribus odit adipisci nisi
              unde veritatis nihil eligendi.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
