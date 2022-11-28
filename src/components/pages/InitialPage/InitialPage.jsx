import { useIntl } from 'react-intl';
import { useEffectOnce } from 'src/hooks';

export const InitialPage = () => {
  const { formatMessage } = useIntl();

  useEffectOnce(() => {
    document.title = formatMessage({ id: 'title' });
  });

  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque magni cumque ipsa quam
        blanditiis unde voluptas veritatis corporis? Provident vel, iure nisi cum tempora rerum
        autem fugiat ullam, iusto corporis atque repudiandae inventore. Pariatur adipisci non quo,
        minima suscipit accusantium nam ipsam molestias quisquam aliquid quae odit labore fuga animi
        illum sed numquam. Est ipsam quia omnis tempore ullam odit architecto deleniti aperiam sit!
        Fugiat numquam quo porro sapiente ad maxime placeat earum aut eligendi asperiores vitae
        dolore vero, alias ipsam quibusdam error non necessitatibus minima amet soluta! Ipsam soluta
        libero voluptate iste nisi ipsum harum aut, eligendi reiciendis? Hic, eos repellendus libero
        nam illo in minima eius recusandae delectus. Tempore doloribus similique nihil iure
        voluptatum deleniti minus. Deserunt, voluptatem odio. Rerum, eligendi voluptate facilis qui
        inventore quibusdam ipsa similique, accusantium eveniet, assumenda repudiandae laboriosam
        omnis veritatis. Nemo dolore quos quam omnis, nobis eveniet ea natus sint repudiandae iste
        veniam animi voluptate explicabo dicta temporibus eum aut tenetur non. Cupiditate distinctio
        non, beatae repudiandae, molestiae repellat aliquid maxime ea amet reprehenderit reiciendis
        tempore laudantium illo quos, facere labore est? Dolorum quae explicabo ratione
        necessitatibus? Deserunt dolor sint ex quidem aperiam, doloremque consequuntur expedita!
        Dicta laudantium earum nostrum modi numquam aspernatur assumenda tenetur accusantium, non
        cumque, perspiciatis consectetur labore delectus dolores. Ab quos placeat facere
        consequuntur aspernatur, aliquid laudantium quasi esse repellendus omnis temporibus
        distinctio repellat cum odit iure unde eveniet obcaecati! Quia nulla in est repellat maiores
        nihil voluptate commodi dolor at facere magnam libero hic, beatae odio porro rerum molestiae
        expedita veritatis, accusamus culpa natus qui dolorum dolore quaerat? Nostrum, non.
        Voluptatum, qui corrupti natus similique ipsum distinctio architecto odio necessitatibus
        alias, aliquam dolor voluptate hic atque earum eligendi iste in voluptatibus cumque dolorum,
        explicabo eos. Quos molestiae cupiditate commodi officia cumque tempora ullam perspiciatis
        dolorem sequi repellat non, provident odio obcaecati et debitis delectus explicabo
        doloremque vero animi. Officiis ipsam dignissimos nisi iusto possimus velit nihil minus
        magni illo voluptate odio nesciunt sapiente sit aperiam dolore dolores rem fugiat et quia
        omnis, inventore ullam. Incidunt rerum natus fuga ipsa fugit quisquam nulla, quidem
        repudiandae unde aspernatur porro alias architecto eos, quam nam! Natus nemo quisquam, est,
        suscipit optio, ullam at ab incidunt dolore ea iure laudantium id unde vero? Illum magnam
        voluptate necessitatibus debitis aliquam officia. Veniam, beatae quasi. Dicta vitae ratione
        quia officia tempora necessitatibus delectus inventore aut perspiciatis est alias vero
        adipisci cupiditate quibusdam molestiae, expedita quis. Perspiciatis tempora labore sint
        illo ducimus accusantium dignissimos ad error asperiores. Nesciunt neque ea nisi assumenda?
        Dolor aut doloremque, ipsa quibusdam magni accusantium dolorem provident, illo unde
        officiis, quia veritatis. Reprehenderit rerum in dolorem sunt aliquid illum qui asperiores
        itaque, tempora dolore error officiis soluta ab, nemo molestiae cupiditate facilis vitae vel
        omnis? Quasi blanditiis quidem ipsum at nostrum autem! Quod qui autem, minima nam ullam, a
        sint dolores iure officiis omnis, accusamus delectus eum! Numquam libero exercitationem
        voluptatum voluptas fugit dicta, explicabo minus cum nam aspernatur quas dolorum aliquam
        sapiente culpa magnam sit unde! At illo quod illum!
      </p>
    </div>
  );
};
