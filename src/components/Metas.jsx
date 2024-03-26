import React,{useState} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Metas.css';


const now = 60;

function Metas() {
  const [botaoBalanco,setBotaoBalanco] = useState(false);


  return (
    
    <div className='container-metas'> 
     
   <div className='quicksand'> 
   <h1 >Motivação</h1>
   </div>
    <strong><blockquote>“Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana” (Carl Jung).</blockquote></strong>
    <div className='container_p'>
    <div className='Tit'>
    <p>
Diante da realidade em que profissionais de saúde não médicos enfrentam baixos rendimentos ao trabalhar em hospitais por plano de saúde, e pacientes que pagam planos caros são obrigados a perder tempo em hospitais para consultas médicas simples, surge a necessidade de uma solução que simplifique o acesso a esses profissionais, proporcionando conveniência e economia de tempo para os pacientes.</p>
   
    </div>
    </div>
    <div className='container_p'>
    <div className='quicksand'>
        <h1>Benefícios</h1>
        </div>
        <div className='Tit'>
        <p>
          <strong>Acesso Simplificado:</strong> O aplicativo oferece aos pacientes acesso direto a uma variedade de profissionais de saúde não médicos, como nutricionistas, fisioterapeutas e psicólogos, sem a necessidade de passar por hospitais para agendar consultas.
        </p>
        </div>
        <div className='Tit'>
        <p>
          <strong>Economia de Tempo e Deslocamento:</strong> Pacientes que pagam por planos de saúde caros não precisam mais perder tempo em hospitais para consultas que não exigem prescrição médica. Eles podem agendar consultas diretamente com os profissionais desejados, economizando tempo e deslocamento.
        </p>
        </div>
        <div className='Tit'>
        <p>
          <strong>Remuneração Justa para Profissionais:</strong> Profissionais de saúde não médicos têm a oportunidade de aumentar sua renda ao se cadastrarem no aplicativo e atenderem pacientes fora do ambiente hospitalar, oferecendo serviços diretos sem a necessidade de intermediários.
        </p>
        </div>
        <div className='Tit'>
        <p>
          <strong>Cuidado Preventivo e Personalizado:</strong> Com a facilidade de acesso aos profissionais de saúde não médicos, os pacientes podem buscar cuidados preventivos e personalizados, focados em suas necessidades específicas, como consultas com nutricionistas para melhorar a alimentação e qualidade de vida.
        </p>
        </div>
        <div className='quicksand'> 
        <h1>Funcionamento</h1>
        </div>
        <div className='Tit'>  <p>
          <strong>Cadastro de Profissionais e Pacientes:</strong> Profissionais de saúde não médicos e pacientes se cadastram no aplicativo, fornecendo informações sobre especialidades, disponibilidade e preferências de atendimento.
        </p> </div>
        <div className='Tit'>
        <p>
          <strong>Busca e Agendamento:</strong> Os pacientes podem pesquisar por profissionais disponíveis em suas áreas e agendar consultas diretamente pelo aplicativo, escolhendo o profissional e o horário mais conveniente.
        </p>
        </div>
        <div className='Tit'>
        <p>
          <strong>Pagamento Simplificado:</strong> O pagamento pelos serviços é feito de forma transparente e direta, sem intermediários, proporcionando uma transação fácil e segura para ambas as partes.
        </p>
        </div>
        <div className='Tit'>
        <p>
          <strong>Avaliação e Feedback:</strong> Após cada consulta, os pacientes têm a oportunidade de avaliar a experiência e fornecer feedback, ajudando a manter a qualidade dos serviços e a reputação dos profissionais no aplicativo.
        </p>
        </div>
        <div className='Tit'>
        <p>
          Em resumo, esse aplicativo oferece uma solução eficiente para conectar pacientes a profissionais de saúde não médicos, proporcionando benefícios tanto para os pacientes quanto para os profissionais, ao mesmo tempo em que promove um cuidado mais acessível, personalizado e eficaz.
        </p>
        </div>
      </div>
    </div>

   
    
  );
}

export default Metas;