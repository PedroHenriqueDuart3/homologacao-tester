import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInView, ScaleInView } from './AnimationComponents';
import { ArrowLeft, Check, Download, Heart } from 'lucide-react';
import jsPDF from 'jspdf';
import './ContractPage.css';
import { text, title } from 'framer-motion/client';

export const ContractPage = ({ onNavigateToHome }) => {
    const [signature, setSignature] = useState('');
    const [isSigned, setIsSigned] = useState(false);
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

    const generatePDF = (signerName) => {
        setIsGeneratingPDF(true);

        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const margin = 20;
        const maxWidth = pageWidth - margin * 2;
        let yPosition = 20;

        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text('COMPROVANTE OFICIAL DE NAMORO', pageWidth / 2, yPosition, { align: 'center' });

        yPosition += 15;
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`Data: ${new Date().toLocaleDateString('pt-BR')}`, pageWidth / 2, yPosition, { align: 'center' });

        yPosition += 20;
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('CONTRATO DE AMOR ETERNO', pageWidth / 2, yPosition, { align: 'center' });

        yPosition += 15;
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');

        const clauses = [
            { title: 'CLÁUSULA PRIMEIRA - Do Amor Incondicional', text: 'Nos comprometemos a se amar para todo o sempre com respeito, carinho, compreensão e dedicação mútua, em todos os momentos da vida, sejam eles de alegria ou dificuldade.' },
        { title: 'CLÁUSULA SEGUNDA - Da Confiança e Comunicação', text: 'Nos comprometemos a confiar um no outro e a conversar sobre absolutamente tudo o que acontecer com qualquer um dos dois, mantendo sempre a transparência, honestidade e diálogo aberto como pilares fundamentais do nosso relacionamento, independentemente de assuntos.' },
        { title: 'CLÁUSULA TERCEIRA - Da Proporção do Amor (Cláusula Especial)', text: 'Eu te amo 55% e você me ama 45%' },
        { title: 'CLÁUSULA QUARTA - Do Companheirismo', text: 'Nos comprometemos a estar presentes um para o outro em todos os momentos, celebrando conquistas juntos e oferecendo apoio incondicional nos momentos difíceis, sendo sempre o porto seguro um do outro.' },
        { title: 'CLÁUSULA QUINTA - Do Respeito Mútuo', text: 'Nos comprometemos a respeitar as individualidades, sonhos, opiniões e espaços um do outro, entendendo que o amor verdadeiro não aprisiona, mas sim liberta e fortalece.' },
        { title: 'CLÁUSULA SEXTA - Das Pequenas Alegrias', text: 'Nos comprometemos a valorizar e celebrar as pequenas coisas do dia a dia, entendendo que o amor se constrói nos detalhes: um sorriso, um abraço, uma palavra carinhosa, um gesto de cuidado.' },
        { title: 'CLÁUSULA SÉTIMA - Do Crescimento Conjunto', text: 'Nos comprometemos a crescer juntos, apoiando os sonhos e objetivos um do outro, construindo um futuro repleto de amor, cumplicidade e realizações compartilhadas.' },
        { title: 'CLÁUSULA OITAVA - Da Fidelidade e Lealdade', text: 'Nos comprometemos a ser fiéis e leais um ao outro, não apenas no aspecto físico, mas também emocional, mantendo o relacionamento como prioridade e protegendo o amor que construíram juntos.' },
        { title: 'CLÁUSULA NONA - Do Perdão e Compreensão', text: 'Nos comprometemos a praticar o perdão e a compreensão, entendendo que todos cometem erros e que o amor verdadeiro é capaz de superar qualquer obstáculo através do diálogo, da empatia e do desejo genuíno de fazer o relacionamento funcionar.' },
        { title: 'CLÁUSULA DÉCIMA - Da Eternidade do Amor', text: 'Nos comprometemos a renovar este compromisso todos os dias, entendendo que o amor eterno é construído através de escolhas diárias de amar, cuidar e valorizar a pessoa amada, hoje e sempre.' },
        { title: 'CLÁUSULA DÉCIMA PRIMEIRA - PROMESSAS',  list: [
                                                                  'Que a gente vai se amar até quando a gente se odiar.',
                                                                  'Nunca fugir, sempre vamos enfrentar tudo juntos! Somos um! Ninguém cai fora, não importa o que aconteça!',
                                                                  'Vamos cuidar um do outro mesmo quando estivermos velhinhos e gagá.',
                                                                  'NUNCA, EM HIPÓTESE ALGUMA, DESISTIR DE NÓS.'
                                                                ]
        }
        ];

        clauses.forEach((clause) => {
            if (yPosition > 250) {
                doc.addPage();
                yPosition = 20;
            }

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(10);
            const titleLines = doc.splitTextToSize(clause.title, maxWidth);
            doc.text(titleLines, margin, yPosition);
            yPosition += titleLines.length * 6 + 5;

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(10);
            const textLines = doc.splitTextToSize(clause.text, maxWidth);
            doc.text(textLines, margin, yPosition);
            yPosition += textLines.length * 5 + 8;
        });

        if (yPosition > 220) {
            doc.addPage();
            yPosition = 20;
        }

        doc.setFontSize(9);
        doc.text('E demais cláusulas conforme contrato completo assinado digitalmente.', margin, yPosition);
        yPosition += 15;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.text('ASSINATURA:', margin, yPosition);
        yPosition += 10;

        doc.setFont('helvetica', 'italic');
        doc.setFontSize(14);
        doc.text(signerName, margin, yPosition);
        yPosition += 5;
        doc.line(margin, yPosition, pageWidth - margin, yPosition);

        yPosition += 10;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text(`Assinado em: ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}`, margin, yPosition);

        yPosition += 15;
        doc.setFontSize(9);
        doc.setFont('helvetica', 'italic');
        const footer = 'Este contrato tem validade eterna e será renovado automaticamente a cada batida do coração.';
        const footerLines = doc.splitTextToSize(footer, maxWidth);
        doc.text(footerLines, pageWidth / 2, yPosition, { align: 'center' });

        const fileName = `Comprovante_Namoro_${new Date().toLocaleDateString('pt-BR').replace(/\//g, '-')}.pdf`;
        doc.save(fileName);
        setIsGeneratingPDF(false);
    };

    const handleSign = () => {
        if (signature.trim()) {
            setIsSigned(true);
            generatePDF(signature.trim());
        }
    };

    const contractClauses = [
        { title: 'CLÁUSULA PRIMEIRA - Do Amor Incondicional', text: 'Nos comprometemos a se amar para todo o sempre com respeito, carinho, compreensão e dedicação mútua, em todos os momentos da vida, sejam eles de alegria ou dificuldade.' },
        { title: 'CLÁUSULA SEGUNDA - Da Confiança e Comunicação', text: 'Nos comprometemos a confiar um no outro e a conversar sobre absolutamente tudo o que acontecer com qualquer um dos dois, mantendo sempre a transparência, honestidade e diálogo aberto como pilares fundamentais do nosso relacionamento, independentemente de assuntos.' },
        { title: 'CLÁUSULA TERCEIRA - Da Proporção do Amor (Cláusula Especial)', text: 'Eu te amo 55% e você me ama 45%' },
        { title: 'CLÁUSULA QUARTA - Do Companheirismo', text: 'Nos comprometemos a estar presentes um para o outro em todos os momentos, celebrando conquistas juntos e oferecendo apoio incondicional nos momentos difíceis, sendo sempre o porto seguro um do outro.' },
        { title: 'CLÁUSULA QUINTA - Do Respeito Mútuo', text: 'Nos comprometemos a respeitar as individualidades, sonhos, opiniões e espaços um do outro, entendendo que o amor verdadeiro não aprisiona, mas sim liberta e fortalece.' },
        { title: 'CLÁUSULA SEXTA - Das Pequenas Alegrias', text: 'Nos comprometemos a valorizar e celebrar as pequenas coisas do dia a dia, entendendo que o amor se constrói nos detalhes: um sorriso, um abraço, uma palavra carinhosa, um gesto de cuidado.' },
        { title: 'CLÁUSULA SÉTIMA - Do Crescimento Conjunto', text: 'Nos comprometemos a crescer juntos, apoiando os sonhos e objetivos um do outro, construindo um futuro repleto de amor, cumplicidade e realizações compartilhadas.' },
        { title: 'CLÁUSULA OITAVA - Da Fidelidade e Lealdade', text: 'Nos comprometemos a ser fiéis e leais um ao outro, não apenas no aspecto físico, mas também emocional, mantendo o relacionamento como prioridade e protegendo o amor que construíram juntos.' },
        { title: 'CLÁUSULA NONA - Do Perdão e Compreensão', text: 'Nos comprometemos a praticar o perdão e a compreensão, entendendo que todos cometem erros e que o amor verdadeiro é capaz de superar qualquer obstáculo através do diálogo, da empatia e do desejo genuíno de fazer o relacionamento funcionar.' },
        { title: 'CLÁUSULA DÉCIMA - Da Eternidade do Amor', text: 'Nos comprometemos a renovar este compromisso todos os dias, entendendo que o amor eterno é construído através de escolhas diárias de amar, cuidar e valorizar a pessoa amada, hoje e sempre.' },
        { title: 'CLÁUSULA DÉCIMA PRIMEIRA - PROMESSAS',  list: [
                                                                  'Que a gente vai se amar até quando a gente se odiar.',
                                                                  'Nunca fugir, sempre vamos enfrentar tudo juntos! Somos um! Ninguém cai fora, não importa o que aconteça!',
                                                                  'Vamos cuidar um do outro mesmo quando estivermos velhinhos e gagá.',
                                                                  'NUNCA, EM HIPÓTESE ALGUMA, DESISTIR DE NÓS.'
                                                                ]
        }

    ];

    return (
        <div className="contract-page">
            <div className="contract-container">
                <FadeInView>
                    <button
                        onClick={onNavigateToHome}
                        className="contract-back-button"
                    >
                        <ArrowLeft style={{ width: '1.25rem', height: '1.25rem' }} />
                        <span>Voltar</span>
                    </button>
                </FadeInView>

                <div className="contract-card">
                    <div className="contract-header">
                        <FadeInView>
                            <h1 className="contract-header-title">
                                Contrato de Amor Eterno
                            </h1>
                            <p className="contract-header-date">
                                Data: {new Date().toLocaleDateString('pt-BR')}
                            </p>
                        </FadeInView>
                    </div>

                    <div className="contract-body">
                        <div className="contract-clauses">
                            {contractClauses.map((clause, index) => (
                                <FadeInView key={index} delay={0.1 + index * 0.05}>
                                    <div className={clause.special ? 'contract-clause contract-clause-special' : 'contract-clause'}>
                                        <h2 className="contract-clause-title">
                                            {clause.title}
                                        </h2>
                                    </div>
                                    {clause.list ? (
                                                     <ul className="contract-clause-list">
                                                       {clause.list.map((item, i) => (
                                                         <li key={i} className="contract-clause-list-item">
                                                           <strong>{i + 1}ª:</strong> {item}
                                                         </li>
                                                       ))}
                                                     </ul>
                                                   ) : (
                                                     <p className="contract-clause-text">
                                                       {clause.text}
                                                     </p>
                                                   )}

                                </FadeInView>
                            ))}
                        </div>

                        <FadeInView delay={0.6}>
                            <div className="contract-footer-note">
                                <p className="contract-footer-text">
                                    Este contrato tem validade eterna e será renovado automaticamente a cada batida do coração.
                                </p>
                            </div>
                        </FadeInView>

                        <ScaleInView delay={0.7}>
                            <div className="contract-signature-section">
                                <AnimatePresence mode="wait">
                                    {!isSigned ? (
                                        <motion.div
                                            key="sign"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <h3 className="contract-signature-title">
                                                Assinatura Digital
                                            </h3>
                                            <p className="contract-signature-description">
                                                Digite seu nome completo para assinar este contrato de amor:
                                            </p>
                                            <input
                                                type="text"
                                                value={signature}
                                                onChange={(e) => setSignature(e.target.value)}
                                                placeholder="Seu nome completo"
                                                className="contract-signature-input"
                                            />
                                            <motion.button
                                                onClick={handleSign}
                                                disabled={!signature.trim()}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="btn-romantic contract-sign-button"
                                            >
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <Heart style={{ width: '1.25rem', height: '1.25rem' }} />
                                                    Assinar Contrato
                                                </span>
                                            </motion.button>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="signed"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="contract-signed-section"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: 'spring', bounce: 0.5 }}
                                                className="contract-check-icon-wrapper"
                                            >
                                                <Check className="contract-check-icon" />
                                            </motion.div>
                                            <h3 className="contract-signed-title">
                                                ✓ Contrato Assinado com Sucesso!
                                            </h3>
                                            <div className="contract-signature-display">
                                                <p className="contract-signature-name">
                                                    {signature}
                                                </p>
                                                <p className="contract-signature-timestamp">
                                                    Assinado em: {new Date().toLocaleDateString('pt-BR')} às {new Date().toLocaleTimeString('pt-BR')}
                                                </p>
                                            </div>
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.5 }}
                                                className="contract-success-message"
                                            >
                                                💕 Nosso amor agora é oficial! 💕
                                            </motion.p>
                                            <div className="contract-button-group">
                                                <motion.button
                                                    onClick={() => generatePDF(signature)}
                                                    disabled={isGeneratingPDF}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="btn-romantic"
                                                >
                                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                        <Download style={{ width: '1.25rem', height: '1.25rem' }} />
                                                        {isGeneratingPDF ? 'Gerando...' : 'Baixar PDF'}
                                                    </span>
                                                </motion.button>
                                                <motion.button
                                                    onClick={onNavigateToHome}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="contract-secondary-button"
                                                >
                                                    Voltar para Nossa História
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </ScaleInView>
                    </div>
                </div>
            </div>
        </div>
    );
};