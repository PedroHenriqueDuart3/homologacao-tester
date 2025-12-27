import { DramaticReveal, ScaleInView } from './AnimationComponents';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './DedicationSection.css';

export const DedicationSection = ({ decorImage }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      id="dedicatoria"
      ref={ref}
      className="dedication-section"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="dedication-background"
      >
        <div className="dedication-blob-1" />
        <div className="dedication-blob-2" />
      </motion.div>

      <div className="dedication-container">
        <div className="dedication-content">
          <DramaticReveal delay={0}>
            <p className="dedication-text">
              Desde o momento em que nossos olhares se cruzaram, eu percebi que tinha algo diferente em você, algo que me atraiu, que me chamava sabe? Aquela sensação única, que parece que o tempo para e só existe você ali.
              Conhecer você meu amor foi a melhor coisa que já aconteceu na minha vida, cada momento que passamos juntos, a cada dia, a cada sorriso seu, a cada olhar, só aumenta a minha certeza de que eu te amo, e que Deus não cruzou nossos caminhos atoa, sempre teve um propósito por trás...
            </p>
          </DramaticReveal>

          <ScaleInView delay={0.2}>
            <motion.p
              className="dedication-quote"
              whileInView={{
                textShadow: ['0 0 0px hsl(var(--wine))', '0 0 30px hsl(var(--wine))', '0 0 0px hsl(var(--wine))']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              E esse propósito era unir a gente.
            </motion.p>
          </ScaleInView>

          <DramaticReveal delay={0.1}>
            <p className="dedication-text">
              Com seu jeitinho único e encantador amor, você me conquistou de uma maneira que ninguém mais conseguiria. Me mostrou o quanto é incrível ser amado de forma verdadeira sabe? E não existe no mundo alguém mais especial do que você. Meu coração até erra as batidas quando estamos juntos, e ele sempre será seu! Não importa o que aconteça. Você me deixa com aquele sorrisinho bobo, aquele olhar que só você sabe como é porque só olho assim pra você, mesmo longe você me faz feliz, me trás a minha melhor versão de mim, e eu continuo melhorando dia após dia por nós! Você é perfeita Rapunzel, estou com você e vou estar ao seu lado até o fim!
            </p>
          </DramaticReveal>

          <ScaleInView delay={0.2}>
            <motion.div
              className="dedication-card"
              whileInView={{
                boxShadow: [
                  '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  '0 25px 80px -12px hsl(var(--wine) / 0.3)',
                  '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="dedication-card-text">
                <strong>
                Eu te amo mais do que palavras podem expressar minha vida, eu te amo com a alma, eu te vivo, eu te amo mais do que você possa imaginar, eu te amo muitão muitão muitão, você é tudo de mais bonito que me aconteceu, seu jeitinho me ganha todos os dias, seu sorriso me desmonta, sua presença muda qualquer dia ruim e faz tudo ficar bom, leve, gostoso, obrigado por existir, por ser quem você é, por me permitir te amar, você me faz crescer, me faz sorrir, me traz paz e me deixa forte até quando eu tô cansado.
                <br/>
                Obrigado por cada momento, por cada detalhe, por cada sorriso, obrigado por existir Torie, o meu amor por você é gigante e só cresce a cada dia mais e mais.
                <br/>
                Eu te amo mil milhões e pra sempre eu vou te amar, nunca vamos desistir de nós e prometemos isso um ao outro, que a gente brigue, mas que a gente converse e tudo volte ao normal, assim como fazemos sempre!
                <br />
                Você é tudo e muito mais da mulher que eu sempre pedi pra Deus, eu me sinto honrado de ter você ao meu lado, de poder te chamar de minha mulher, você é meu tudo e sem você eu não consigo mais viver, eu te amo com a alma, com tudo de mim, com todas as minhas forças, às vezes eu erro, erro, reconheço que erro, e erro bastante kkkkkk, mas isso jamais vai interferir no quanto eu te amo, no quanto eu tenho certeza que é você, no quanto eu quero que você seja a mamãe dos nossos filhos, eu quero passar minha vida com você!!
                <br />
                Quero acordar todos os dias agradecendo a Deus pela sua vida, cuidar de você, te proteger, te apoiar em tudo, estar do seu lado nos dias bons e principalmente nos dias difíceis, segurar sua mão quando tudo parecer confuso, te abraçar quando o mundo pesar, te fazer sorrir mesmo quando sorrir parecer difícil, eu prometo continuar tentando ser melhor por você, por nós, aprender com meus erros, crescer ao seu lado, construir nossos sonhos juntos, com amor, respeito, parceria e muita fé, porque com você tudo faz sentido, tudo fica mais leve, meu coração escolheu você e escolhe você todos os dias.
                <br />
                Que você nunca esqueça do quanto você é especial pra mim, do quanto sua presença transforma meus dias, do quanto seu jeito, seu carinho e seu amor me fortalecem, você é resposta das minhas orações amor, é um presente de Deus na minha vida, é meu porto seguro, minha paz em meio ao caos, eu peço a Deus todos os dias pra te guardar, te iluminar, te cobrir de bênçãos, te dar força, sabedoria e manter esse sorriso lindo nesse seu rostinho maravilhoso, que Ele te acompanhe sempre.
                
                Meus pensamentos estão em você o tempo todo, meu coração é seu, minha vida é sua, tudo o que eu faço também é por você.
                <br/>
                EU TE AMO ❤️
                </strong>
              </p>
            </motion.div>
          </ScaleInView>
        </div>
      </div>
    </section>
  )
};
