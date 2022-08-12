import React from 'react';
import '../css/signup/modal.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         웹사이트 이용약관 및 구매
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>최종 수정일: 2021년 5월 21일</span>
        <br />
        <br />
        <span>중요: 팀 리더로 Teams 도구 를 사용 중이거나 사용할 계획이라면 대신 이 용어 를 참조하십시오 .</span>
        <br />
        <br />
        <h2>1. 소개</h2>
        <br />
        <p>
        이러한 사용 및 구매 조건은 www.16personalities.com("웹사이트") 사용 및 웹사이트를 통해 제공되는 디지털 콘텐츠 및 서비스 구매에 적용됩니다. 
        웹사이트를 사용함으로써 귀하는 이 사용 약관에 완전히 동의하고 웹사이트 및 웹사이트에서 제공되는 모든 디지털 콘텐츠(전자책 포함) 및 구독 또는 기타 서비스를 포함한 관련 서비스를 제공하기 위한 당사와의 계약의 일부를 구성합니다. (당사의 "제품")을 귀하에게 제공합니다. 이 이용 약관 또는 이용 약관의 일부에 동의하지 않는 경우 웹사이트를 등록, 가입 또는 사용하지 마십시오. 
        우리가 웹사이트를 언급할 때 우리는 www.16personalities.com과 이를 통해 우리가 제공하는 디지털 콘텐츠 및 서비스를 의미합니다.
        <br />
        <br />
        <strong>당사 제품(웹사이트 포함)이 사용되는 방식을 읽으십시오.</strong>
        <br />
        <br />
        <strong>당사는 당사 제품 사용의 정서적, 건강 또는 상업적 이점과 관련하여 어떠한 주장이나 진술도 하지 않으며 웹사이트에 제공된 정보는 해당되는 경우 전문적인 의학적 또는 정신과적 조언을 대체할 수 없습니다. 건강이나 정신 건강 문제가 우려되는 경우 의사와 상담하는 것이 좋습니다. 특히:</strong>
        <br />
        <br />
        <ul>
          <li>1) 당사의 제품은 정보 및 오락 목적으로만 제공되며 의료 또는 심리 평가 목적이 아닌 귀하의 개인적인 용도(예: 다른 사람을 선별하거나 평가하지 않음)로 제공되며 다른 목적으로는 사용할 수 없습니다.</li><br />
          <li>2) 당사 제품은 의학적 조언을 제공하지 않습니다.</li><br />
          <li>3) 당사 제품은 귀하의 심리적 웰빙 및 성격에 관한 포괄적이거나 정확한 의견이나 평가로 간주되거나 의존되어서는 안 됩니다. 우리는 당신에 대해 그것을 보장하기에 충분하지 않습니다. 당사 제품 사용으로 인해 우려 사항이 있는 경우 적절한 전문가의 조언을 구해야 합니다.</li><br />
          <li>4) 귀하가 당사 제품의 콘텐츠를 사용하거나 읽은 후에 내리는 모든 결정은 귀하만을 위한 것이며 당사는 그러한 결정의 결과에 대해 책임을 지지 않습니다.</li><br />
          <li>5) 당사 제품은 개인적인 용도로만 사용되며 비즈니스, 교육, 고용 또는 채용 상황에서 사용하도록 의도되지 않았습니다.</li><br />
          <li>6) 당사는 제품의 텍스트를 영어 이외의 언어로 제공하지만 그러한 번역의 정확성은 보장되지 않으며(예: 많은 번역이 자원 봉사자에 의해 제공됨) 사용에 따른 위험은 사용자가 감수해야 합니다.</li><br />
        </ul>
        <br />
        <br />
        <strong>웹사이트를 사용하고 당사 제품을 구매하려면 13세 이상(또는 해당 국가의 관련 동의 연령 이상)이어야 합니다.</strong>
        <br />
        <br />
        공식 텍스트는 웹사이트의 영어 버전입니다. 다른 언어로의 번역에서 발생하는 불일치 또는 차이점은 구속력이 없으며 어떤 목적으로도 법적 효력이 없습니다. 비영어 버전의 웹사이트에 포함된 정보의 정확성과 관련하여 질문이 있는 경우 공식 버전인 웹사이트의 영어 버전을 참조하십시오.
        <br />
        <br />
        웹사이트는 쿠키를 사용합니다. 웹사이트를 사용하고 이 이용약관에 동의함으로써 귀하는 당사의 개인정보 보호정책 에 따라 쿠키를 사용하는 데 동의하는 것 입니다.
        <br />
        <br />
        <span style={{color:'#3ab8cf'}}>귀하가 당사에 제공한 개인 데이터는 당사의 개인정보 보호정책</span> 에 따라 처리됩니다 .
        <br />
        <br />
        이 사용 및 구매 약관은 법률 또는 당사의 상업 및 비즈니스 관행의 변경 사항을 반영하기 위해 업데이트하기 위해 수시로 수정될 수 있습니다. 변경 사항에 대한 통지는 웹사이트에 새로운 조건을 게시함으로써 이루어집니다. 웹사이트를 계속 사용함에 있어 귀하는 웹사이트를 사용할 때 당시의 전체 이용 약관에 동의함을 확인합니다.
        <br />
        <br />
        <span style={{color:'#3ab8cf'}}>변경 사항에 반대하는 경우 support@16personalities.com</span> 으로 연락하여 변경 후 30일 이내에 웹사이트 사용 및 지속적인 제품 제공을 취소할 수 있는 권리가 있습니다 . 당사는 사전에 지불했거나 취소된 제품과 관련된 모든 금액을 환불합니다. 그러나 이미 다운로드했거나 액세스한 제품에 대해서는 환불을 받을 수 없습니다.
        <br />
        <br />
        <h2>2. 등록</h2>

        <br />
        <br />
        등록이나 구독 없이 웹사이트의 여러 영역에 액세스할 수 있지만 특정 콘텐츠를 보거나 특정 서비스 또는 기타 제품에 액세스하려면 웹사이트에 등록해야 할 수 있습니다.
        <br />
        <br />
        귀하가 웹사이트에 등록할 때 당사는 귀하에게 특정 개인 정보를 요청할 것입니다. <span style={{color:'#3ab8cf'}}>귀하가 당사에 제공한 모든 개인 정보는 당사의 개인정보 보호정책 에 따라 처리됩니다.</span>
        <br />
        <br />
        웹사이트에 등록하는 경우 비밀번호를 생성해야 할 수 있습니다. 사기를 방지하려면 이 암호를 기밀로 유지해야 하며 다른 사람과 공개하거나 공유해서는 안 됩니다. 다른 사람이 귀하의 비밀번호를 알고 있거나 알고 있다고 의심되는 경우 즉시 <span style={{color:'#3ab8cf'}}>support@16personalities.com 에 연락하여 알려야 합니다.</span>
        <br />
        <br />
        귀하의 계정 또는 귀하의 비밀번호 사용을 통해 웹사이트의 보안 위반 또는 오용 가능성이 있다고 믿을 만한 이유가 있는 경우 당사는 귀하에게 비밀번호 변경을 요구하거나 귀하의 계정을 일시 중지할 수 있습니다. 비밀번호를 변경하거나 계정을 재활성화할 때까지 웹사이트의 특정 부분에 액세스하지 못할 수 있습니다.
        <br />
        <br />
        귀하는 귀하가 당사에 제공하는 모든 개인 정보가 정확하고 완전하며 항상 최신 상태로 유지된다는 데 동의합니다. <span style={{color:'#3ab8cf'}}>당사는 당사의 개인정보 보호정책</span> 에 따라 귀하에게 연락하기 위해 당사에 제공된 정보를 사용할 수 있습니다 .
        <br />
        <br />
        귀하는 웹사이트에 둘 이상의 등록을 할 수 없습니다. 당사는 당사의 판단에 따라 언제든지 둘 이상의 프로필을 소유한 사람의 등록을 삭제하거나 취소할 수 있는 재량권을 보유합니다.
        <br />
        <br />
        당사는 귀하가 본 사용 및 구매 약관을 준수하지 않는 경우를 포함하여 합당한 경우 언제든지 등록을 일시 중지하거나 취소할 수 있는 권리를 보유합니다.
        <br />
        <br />
        <h2>3. 성격검사</h2>
        <br />
        <br />
        웹사이트를 사용하여 무료 성격 테스트("성격 테스트")를 볼 수 있습니다. 성격 테스트의 결과는 자동으로 분석되며 특정 성격의 특성에 대한 설명과 함께 16가지 다른 성격 유형 중 하나와 두 가지 성격 유형 변형 중 하나를 할당하는 결과를 받게 됩니다("테스트 결과 "). 우리는 또한 <span style={{color:'#3ab8cf'}}>개인 정보 보호 정책</span> 에 따라 연구 목적으로 귀하의 답변과 결과를 기록하고 사용할 수 있습니다 .
        <br />
        <br />
        우리는 또한 4항에 따라 구매할 수 있는 프리미엄 성격 프로필("프리미엄 프로필")과 온라인 도구 및 평가("도구 키트")에 대한 액세스를 제공합니다.
        <br />
        <br />
        <h2>4. 디지털 콘텐츠 및 서비스 구매</h2>
        <br />
        <br />
        당사는 웹사이트에서 구매할 수 있는 디지털 콘텐츠 및 구독 서비스를 제공합니다. 거기에 설명된 대로 제공됩니다. 당사는 수시로 제공되는 설명 및 제품을 변경할 권리를 보유합니다.
        <br />
        <br />
        당사 제품은 귀하에게 판매되는 것이 아니라 라이센스가 부여된 것입니다. 그들은 우리의 재산으로 남아 있습니다. 제품에 대한 지적 재산권(저작권 포함)은 해당되는 경우 당사 및/또는 당사의 작성자/라이센서에게 있습니다. 당사 제품에는 디지털 권한 관리 정보 및 기술이 포함될 수 있으며, 이는 귀하가 변조 또는 제거하지 않기로 동의하고 당사 지적 재산의 오용을 방지하거나 방지하기 위한 것입니다.
        <br />
        <br />
        당사의 전자책은 PDF 형식이며 의도한 목적에 맞게 최신 PDF 리더를 사용해야 합니다.
        <br />
        <br />
        지불이 필요한 주문을 할 때 지불 권한을 부여해야 합니다. 당사는 귀하가 주문한 것과 서비스를 제공하는 사이 또는 귀하가 디지털 콘텐츠에 대한 액세스를 요청하는 사이에 언제든지 귀하로부터 지불을 받을 수 있습니다.
        <br />
        <br />
        귀하의 주문은 당사의 구매 제안입니다. 당사가 실제로 귀하로부터 지불을 받을 때까지 귀하와 당사 사이에는 어떠한 종류의 계약도 체결되지 않으며, 그 시점에서 계약 확인 및 귀하의 주문 수락을 이메일로 보내드립니다. 그때까지 우리는 이유 없이 서비스 또는 디지털 콘텐츠 제공을 거부할 수 있습니다. 당사가 지불을 받은 후 어떤 이유로든 서비스를 제공하지 않거나 디지털 콘텐츠를 제공하지 못하는 경우 전액을 환불해 드립니다.
        <br />
        <br />
        귀하가 주문한 품목에 대해 지불해야 하는 가격은 웹사이트에 명확하게 명시되어 있습니다. 실수로 항목의 가격을 낮게 책정한 경우 해당 항목을 발송하거나 사용 가능하게 하기 전에 귀하에게 통지하는 경우 명시된 가격으로 해당 항목을 귀하에게 공급할 책임이 없습니다.
        <br />
        <br />
        지불은 웹사이트를 통해 전자적으로 이루어집니다. 신용 카드 또는 직불 카드로 결제할 때 귀하는 보안상의 이유로 적절한 자금이 있는지 확인하기 위해 카드 발급사로부터 승인을 받는 것을 포함하여 당사가 특정 수표를 수행하는 데 동의하는 것입니다. 여기에는 필요한 경우 은행 또는 신용 조회 기관과 함께 귀하의 이름, 주소 및 기타 개인 정보를 확인하는 작업이 포함될 수 있습니다.
        <br />
        <br />
        구독 기반 서비스의 경우 첫 번째 결제일과 같거나 가장 가까운 날짜에 월 또는 연도에 대한 결제가 이루어집니다.
        <br />
        <br />
        당사는 웹사이트에 새로운 수수료를 게시하여 언제든지 수수료를 변경할 수 있습니다. <span style={{color:'#3ab8cf'}}>수수료 인상에 반대하는 경우 변경 후 30일 이내에 support@16personalities.com</span> 으로 연락하여 웹사이트 사용 및 지속적인 제품 제공을 취소할 수 있는 권리가 있습니다 . 당사는 사전에 지불했거나 취소된 제품과 관련된 모든 금액을 환불합니다. 귀하는 이미 다운로드했거나 액세스한 제품과 관련하여 환불을 받을 수 없습니다.
        <br />
        <br />
        표시된 모든 가격은 달리 명시되지 않는 한 미국 달러($USD)로 표시되며 해당되는 경우 VAT가 포함됩니다.
        <br />
        <br />
        제품을 구매하거나 다운로드한 후 교체품을 제공하도록 요청한 경우 제품을 교체할 수 있는 법적 권리가 없는 한 교체는 당사의 재량에 따릅니다. 특히 당사의 전자책은 수시로 업데이트되고 교체되므로 어떠한 경우에도 교체가 불가능할 수 있습니다.
        <br />
        <br />
        <h2>팀 도구</h2>
        <br />
        <br />
        <span style={{color:'#3ab8cf'}}>팀 구성원으로 팀 도구</span> 를 사용하는 경우 서비스를 제공하기 위한 계약은 당사와 귀하의 팀 사이에 있으며 당사는 귀하에게 서비스를 제공할 의무가 없으며 귀하와 관련하여 귀하에게 책임이 있거나 주의 의무가 없습니다. 해당 서비스의 사용 – 이는 당사가 아닌 귀하의 팀의 책임입니다 .
        <br />
        <br />
        팀 도구는 팀 문화, 동기 부여, 의사 소통 스타일 및 유사한 측면을 이해하고 개선하는 데 도움이 되는 정보 목적으로만 제공됩니다. 의료, 고용 또는 심리 평가 목적으로 제공되지 않습니다(예: 고용 상황에서 다른 사람을 모집, 선별, 관리 또는 평가하기 위해). 또한:
        <br />
        <br />
        <ul>
          <li>1. 이 도구의 사용은 사용하거나 참여하는 사람들이 기꺼이 그렇게 할 의향이 있고 팀 리더가 워크숍을 진행하고 결과를 비차별적이고 합법적이며 민감한 방식으로 사용한다고 가정합니다.</li><br />
          <li>2. 이 도구는 참여하는 사람들이 자신의 성격 특성, 행동 및 습관에 대해 정직한 경우에만 유용합니다. 그렇지 않은 경우(예를 들어, 관리자나 조직이 수용할 수 있도록 특정 방식으로 응답해야 한다고 생각하는 경우) 모든 출력에 결함이 있습니다. 어떠한 경우에도 <strong>당사는 Teams 도구의 출력 또는 귀하의 팀이 이를 사용하는 방법 또는 그러한 사용을 기반으로 한 결정이나 조치의 결과에 대해 책임을 지지 않습니다.</strong> 다시 말하지만, 이는 전적으로 귀하의 조직 및/또는 팀 리더의 책임입니다.</li>
        </ul>
        <br />
        <br />

        <span style={{color:'#3ab8cf'}}>우려 사항이나 불만 사항이 있는 경우 support@16personalities.com</span> 으로 이메일을 보내 문의할 수 있습니다 . <strong>그러나 우리는 팀이 팀 도구를 사용하는 방식에 대해 책임을 지지 않으며 팀의 도구 사용에 대한 질문은 팀 리더에게 문의해야 합니다.</strong>

        <br />
        <br />
        <h2>5. 환불 및 취소 정책</h2>
        <br />
        <br />
        웹사이트에서 구매한 디지털 콘텐츠(전자책 포함)가 마음에 들지 않는 경우 아래 조항에 따라 구매 후 30일 이내에 환불해 드립니다.
        <br />
        <br />
        구독 기반 서비스의 경우 구독과 연결된 마지막 결제만 환불할 수 있습니다. 부분적인 서비스 개월에 대한 환불이나 크레딧은 제공되지 않으며, 개설된 계정으로 사용하지 않은 개월 동안은 환불이 이루어지지 않습니다.
        <br />
        <br />
        환불을 요청함으로써 귀하는 웹사이트에서 다운로드하거나 웹사이트에서 액세스하거나 다른 수단으로 귀하에게 보낸 디지털 콘텐츠의 모든 사본을 삭제했음을 확인합니다.
        <br />
        <br />
        기프트 코드 및 맞춤 주문은 환불 및 교환이 불가능합니다.
        <br />
        <br />
        환불을 받으려면 (i) 관련 프리미엄 프로필 또는 기타 프리미엄 콘텐츠의 복사본을 다른 사람과 공유하지 않았으며 (ii) 모든 복사본을 삭제하거나 파기했음을 보증해야 합니다. 귀하가 소유하고 있는 이 자료들.
        <br />
        <br />
        다음과 같은 경우 환불을 거부할 권리가 있습니다.
        <br />
        <br />
          <ul>
            <li>1. 과거에 환불을 요청한 후 주문한 경우</li><br />
            <li>2. 지불이 지불 거절 또는 이의 제기 시도와 연결되어 있습니다.</li><br />
            <li>3. 환불을 요청한 후 프리미엄 프로필 다운로드 링크를 사용하거나 구매한 다른 프리미엄 콘텐츠에 액세스한 경우</li><br />
            <li>4. 귀하가 프리미엄 프로필(-s), 다운로드 링크(-s) 또는 액세스 자격 증명을 다른 사람들과 공유했다고 믿을 만한 강력한 이유가 있습니다(예: 여러 위치에서 액세스 시도가 있었던 경우).</li><br />
            <li>5. 활성 사용자 계정이 있음에도 불구하고 결제를 사기로 보고하는 등 의도적으로 오해의 소지가 있는 정보를 제공합니다.</li>
          </ul>
        <br />
        <br />
        <strong>이는 소비자 계약(정보, 취소 및 추가 요금) 규정 2013에 따른 귀하의 법적 취소 권리에 영향을 미치지 않습니다. 이러한 권리는 <span style={{color:'#3ab8cf'}}>환불 및 취소 정책</span> 에서 찾을 수 있습니다 .</strong>
        <br />
        <br />
        <h2>6. 웹사이트/제품 사용 허가</h2>
        <br />
        <br />
        달리 명시되지 않는 한, 당사 또는 당사의 사용 허가자는 저작권 및 관련 저작인격권, 상표권, 겟업 및 미등록 권리, 영업권을 포함하되 이에 국한되지 않는 모든 제품을 포함하여 웹사이트 및 웹사이트의 자료에 대한 지적 재산권을 소유합니다. , 노하우, 소프트웨어, 데이터베이스 권리 및 기타 모든 지적 재산권. 아래 라이선스에 따라 이러한 모든 지적 재산권은 독점적으로 보유됩니다. 제품에 당사가 소유하지 않은 제3자의 지적 재산이 있는 경우 이를 명확하게 명시합니다.
        <br />
        <br />
        귀하는 아래 및 본 사용 약관의 다른 곳에 명시된 제한 사항에 따라 개인 용도로 웹사이트 또는 제품의 페이지를 보고, 캐싱 목적으로만 다운로드하고, 페이지를 인쇄할 수 있습니다.
        <br />
        <br />
        당사의 사전 동의 없이 다음 행위를 해서는 안 됩니다.
        <br />
        <br />
        <ul>
          <li>1. 이 웹사이트의 자료를 복제, 번역 또는 리버스 엔지니어링(동의 없이 다른 웹사이트에 게시하거나 당사 제품의 기타 복제 또는 통신 포함), </li> <br />
          <li>2. 웹사이트에서 자료 또는 제품을 판매, 임대 또는 재라이센스를 부여합니다.</li><br />
          <li>3. 웹사이트 또는 제품의 자료를 대중에게 전달합니다.</li><br />
          <li>4. 상업적 목적을 위해 당사 웹사이트 또는 제품의 자료를 복제, 복제, 복사 또는 활용하는 행위</li><br />
          <li>5. 웹사이트 또는 제품의 자료를 편집하거나 수정합니다.</li><br />
          <li>6. 재배포를 위해 구체적이고 명시적으로 제공된 콘텐츠를 제외하고 이 웹사이트 또는 제품의 자료를 재배포합니다. 또는 당사자의 동의 없이 당사 웹사이트에서 제3자의 지적 재산권을 복제하는 행위.</li>
        </ul>
        <br />
        <br />
        이 조항(6)의 제한 사항 또는 기타 조건이 저작권, 디자인 및 특허법 1988(수정됨)(CDPA)에 따라 저작권 작업의 공정 거래 또는 기타 허용된 사용과 관련하여 귀하의 명시적 권리를 제한하는 범위 내에서 그러한 제한 또는 조건은 CDPA가 그러한 제한 또는 조건을 시행할 수 없다고 명시적으로 명시한 경우 및 그 범위 내에서 시행할 수 없습니다.
        <br />
        <br />
        <h2>7. 허용되는 사용</h2>
        <br />
        <br />
        귀하는 웹사이트를 손상시키거나 웹사이트의 가용성이나 접근성을 손상시키는 방식으로 웹사이트를 사용해서는 안 됩니다. 또는 불법, 불법, 사기 또는 유해한 방식으로, 또는 불법, 불법, 사기 또는 유해한 목적 또는 활동과 관련하여.
        <br />
        <br />
        귀하는 웹사이트를 사용하여 스파이웨어, 컴퓨터 바이러스, 트로이 목마, 웜, 키스트로크 로거, 루트킷 또는 기타로 구성된 자료를 복사, 저장, 호스팅, 전송, 전송, 사용, 게시 또는 배포할 수 없습니다. 악성 컴퓨터 소프트웨어.
        <br />
        <br />
        귀하는 당사의 명시적 서면 동의 없이 웹사이트에서 또는 웹사이트와 관련하여 체계적이고 자동화된 데이터 수집 활동(스크레이핑, 데이터 마이닝, 데이터 추출 및 데이터 수집을 포함하되 이에 국한되지 않음)을 수행해서는 안 됩니다. 귀하는 웹사이트를 통해 판매되는 제품에 대한 권리를 침해해서는 안 됩니다.
        <br />
        <br />
        귀하는 웹사이트를 사용하여 원치 않는 상업적 통신을 전송하거나 전송해서는 안 됩니다.
        <br />
        <br />
        귀하는 당사의 명시적인 서면 동의 없이 제품 리뷰를 제외하고 마케팅과 관련된 어떠한 목적으로도 웹사이트를 사용해서는 안 됩니다.
        <br />
        <br />
        취업 전 테스트 또는 직원 평가를 포함하되 이에 국한되지 않는 비즈니스 관련 평가를 위해 웹사이트 또는 제품을 사용해서는 안 됩니다.
        <br />
        <br />
        귀하는 웹사이트에 게시하거나 다른 사용자에게 전달하는 모든 콘텐츠에 대해 전적인 책임을 집니다. 귀하는 웹사이트에 다음을 게시하거나 다른 사용자에게 전송하지 않습니다.
        <br />
        <br />
          <ul>
            <li>1. 부정확, 명예 훼손, 학대, 외설, 공격, 모독, 성적 지향, 위협, 희롱, 오도, 인종 모욕 또는 불법</li><br />
            <li>2. 사용자에게 허위 또는 오도 정보를 조장하는 모든 것</li><br />
            <li>3. 불법 행위를 포함하거나 조장하는 모든 것 또는 암호 또는 기타 기밀 정보를 요구하는 모든 것.</li>
          </ul>
        <br />
        <br />
        귀하는 다음 행위를 하지 않을 것에 동의합니다.
        <br />
        <br />
        <ul>
          <li>1. 웹사이트 사용자를 괴롭히거나 위협하거나 괴롭히는 행위.</li><br />
          <li>2. 웹사이트의 적절한 작동을 비활성화하거나 손상시키는 모든 행위.</li><br />
          <li>3. 귀하가 작성한 진술이 당사의 승인을 받았다는 것을 암시하거나 표현하거나 암시하기 위해 무엇이든 하십시오.</li><br />
          <li>4. 다른 사람이 웹사이트의 사용자인지 여부에 관계없이 프로필에서 다른 사람을 사칭하는 행위.</li>
        </ul>
        <br />
        <br />
        <h2>8. 사용자 생성 콘텐츠</h2>
        <br />
        <br />
        당사는 사용자가 당사 웹사이트에 콘텐츠("콘텐츠")를 게시할 기회를 제공할 수 있습니다(예: 토론 게시물, 댓글 또는 비공개 메시지의 형태로).
        <br />
        <br />
        당사는 어떤 이유로든 웹사이트에서 콘텐츠를 제거하거나 편집할 수 있지만 특히 당사의 표준을 준수하지 않는 콘텐츠는 제거될 수 있습니다.
        <br />
        <br />
        웹사이트에 콘텐츠를 게시함으로써 귀하는 다음을 확인합니다.
        <br />
        <br />
        <ul>
          <li>1. 귀하는 콘텐츠의 작성자입니다.</li><br />
          <li>2. 귀하는 콘텐츠의 모든 지적 재산권(저작권 및 기타 권리)("IPR")을 소유합니다(콘텐츠가 단순히 정보로 구성되지 않은 경우).</li>
        </ul>

        <br />
        <br />
        귀하가 웹사이트에 게시하는 모든 콘텐츠는 귀하의 개인적인 책임입니다. 귀하는 명예 훼손, IPR 위반, 개인 정보 보호 또는 귀하의 콘텐츠에서 발생하는 기타 모든 청구와 관련된 모든 청구에 대해 개인적으로 책임을 집니다.
        <br />
        <br />
        귀하는 명예 훼손, IPR 위반, 개인 정보 보호 또는 귀하의 콘텐츠에서 발생하는 기타 청구와 관련된 청구(소송 포함)의 결과로 당사가 겪을 수 있는 모든 책임과 관련하여 당사를 완전히 보상하는 데 동의합니다.
        <br />
        <br />
        콘텐츠를 제출함으로써 귀하는 콘텐츠의 IPR에 따라 무료로 당사에 허가를 부여하여 콘텐츠를 복제, 수행, 파생 작업 준비, 사본 배포 또는 전 세계적으로 모든 매체 및 목적(상업적 목적 포함)으로 콘텐츠를 공개적으로 표시하고 타인에게 권한을 부여합니다. 그렇게 하기 위해. 이 권한을 철회할 수 없습니다.
        <br />
        <br />
        귀하는 모욕적이거나 부정확하거나 오해의 소지가 있거나 명예 훼손, 사기 또는 불법 또는 불법 콘텐츠를 게시하지 않을 것에 동의합니다.
        <br />
        <br />
        특히 다음과 같은 콘텐츠를 게시(또는 웹사이트를 사용하여 배포)하지 않을 것에 동의합니다.
        <br />
        <br />
        <ul>
          <li>1. 특정 집단이나 개인에 대한 인종 차별, 편견, 증오 또는 모든 종류의 신체적 피해를 조장합니다.</li><br />
          <li>2. 다른 사람을 괴롭히거나 괴롭힘을 옹호하는 행위</li><br />
          <li>3. 모든 종류의 포르노 또는 성적으로 노골적인 자료를 표시하거나 홍보합니다.</li><br />
          <li>4. 모욕적, 위협적, 외설적, 명예 훼손적 또는 비방적 행위를 하거나 조장하는 행위</li><br />
          <li>5. 불법, 불법, 지적 재산권 침해, 타인의 명예 훼손, 기밀 유지 또는 불법 활동 조장</li><br />
          <li>6. 불법 복제 컴퓨터 프로그램 또는 링크 제공, 제조업체가 설치한 복제 방지 장치를 우회하기 위한 정보 제공, 불법 복제 음악 또는 불법 복제 음악 파일에 대한 링크 제공과 같이 타인의 저작권 작업에 대한 불법 또는 무단 복제를 조장합니다.</li><br />
          <li>7. 불법 무기 제조 또는 구매, 타인의 사생활 침해, 컴퓨터 바이러스 제공 또는 생성과 같은 불법 활동에 대한 지침 정보를 제공합니다.</li><br />
          <li>8. 액세스가 제한된 페이지 또는 숨겨진 페이지 또는 이미지(액세스 가능한 다른 페이지에서 링크되지 않은 페이지)를 포함하거나 이에 해당됩니다.</li><br />
          <li>9. 상업적이거나 불법적인 목적으로 다른 사용자에게 비밀번호나 개인 식별 정보를 요청하는 행위</li><br />
          <li>10. "정크 메일", "연쇄 편지" 또는 원치 않는 대량 메일 또는 "스패밍"의 전송을 포함합니다.</li><br />
          <li>11. 허위 또는 오해의 소지가 있는 것으로 알고 있는 정보를 홍보합니다.</li><br />
          <li>12. 이름이나 연락처와 같은 개인 정보를 포함합니다. 또는 콘테스트, 경품 행사, 물물교환, 광고 및 피라미드 방식과 같은 상업적 활동 및/또는 판매에 관여합니다.</li>
        </ul>
        <br />
        <br />
        당사는 언제든지 어떤 이유로든 웹사이트에서 콘텐츠를 제거할 권리가 있습니다.
        <br />
        <br />
        당사의 번역 도구를 사용하여 당사 웹사이트 또는 제품의 번역에 기여하는 경우 다음 조건도 적용됩니다.
        <br />
        <br />
        <ul>
          <li>1. 귀하는 당사 웹사이트 또는 제품의 번역을 제출함으로써 이에 대한 모든 권리를 당사에 양도하는 데 동의합니다. 그러한 권리를 양도할 수 없는 범위 내에서 귀하는 그러한 권리를 사용할 수 있도록 취소 불가능하고 독점적이며 전액을 완납한 전 세계 라이선스를 당사에 부여합니다.</li><br />
          <li>2. 귀하는 당사가 어떤 형태로든 귀하에게 보상할 의무 없이 귀하의 번역을 사용할 수도 있고 사용하지 않을 수도 있음을 이해합니다. 그러나 당사의 기준에 부합하고 나열에 동의하는 경우 웹사이트의 특별 섹션에 모든 주요 기여자를 나열하기 위해 최선을 다할 것입니다.</li><br />
          <li>3. 귀하는 귀하가 알고 있는 최선의 지식과 믿음으로 정확한 번역을 제공할 수 있다고 확신하는 경우에만 번역 제안을 하는 데 동의합니다. 당사는 재량에 따라 부적절하다고 판단되는 제안을 삭제할 권리를 보유합니다.</li>
        </ul>
        <br />
        <br />
        <h2>9. 공지 및 게시 중단</h2>
        <br />
        <br />
        당사는 통지 시 명예를 훼손하거나 지적 재산권을 침해하는 콘텐츠를 식별하고 제거하기 위해 모든 합당한 노력을 기울일 것이지만 관련 정보를 제공하지 않은 경우 책임을 질 수 없습니다.
        <br />
        <br />
        웹사이트의 콘텐츠가 명예를 훼손하거나 지적 재산권을 침해한다고 생각되는 경우 다음을 포함하여 <span style={{color:'#3ab8cf'}}>support@16personalities.com 으로 이메일을 보내 서면으로 알려야 합니다.</span>
        <br />
        <br />
        <ul>
          <li>1. 우편 주소, 전화 번호 및 이메일 주소를 포함한 귀하의 전체 이름 및 연락처 세부 정보</li><br />
          <li>2. 명예를 훼손하거나 침해하는 콘텐츠가 표시되는 정확한 URL</li><br />
          <li>3. 명예를 훼손하거나 지적 재산권을 침해한다고 생각하는 콘텐츠</li><br />
          <li>4. 콘텐츠가 명예를 훼손하거나 지적 재산권을 침해한다고 생각하는 이유</li><br />
          <li>5. 귀하가 청구인 또는 권리 보유자를 대신할 권한이 있음을 확인하는 진술 그리고 통지서의 정보와 관련하여 서명된 진실 선언문.</li>
        </ul>
        <br />
        <br />
        이 9항에 따라 작성된 모든 진술은 법원 절차에서 사용될 수 있습니다.
        <br />
        <br />
        <h2>10. 원치 않는 아이디어 제출</h2>
        <br />
        <br />
        우리는 창의적인 제안, 새롭고 향상되거나 개선된 제품, 기술 또는 서비스, 마케팅 캠페인, 판촉, 프로세스, 자료, 삽화, 계획, 전략, 이론 또는 제품 이름을 포함하되 이에 국한되지 않는 요청하지 않은 아이디어를 수락하거나 고려하지 않습니다. 요청하지 않은 아이디어, 기사, 독창적인 창작 작품, 제안 또는 기타 작업을 어떤 형태로든 제출하지 마십시오.
        <br />
        <br />
        이 섹션의 유일한 목적은 당사 제품, 웹사이트 콘텐츠 또는 비즈니스 전략이 당사에 제출된 원치 않는 아이디어와 유사하게 보일 수 있는 잠재적인 분쟁을 피하는 것입니다. 아이디어나 제안을 보내지 말아 달라는 당사의 요청에도 불구하고 여전히 제출하기로 선택한 경우, 귀하의 서신, 의견, 이메일 또는 기타 커뮤니케이션 형식에 관계없이 귀하는 다음 조건에 동의하고 이해합니다. 귀하의 제출물에 적용됩니다:
        <br />
        <br />
        <ul>
          <li>1. 귀하의 제출물은 귀하에 대한 보상 없이 자동으로 당사의 단독 재산이 되며 당사는 귀하의 제출물과 관련하여 귀하 또는 다른 사람에 대해 어떠한 종류의 의무도 지지 않습니다.</li><br />
          <li>2. 당사는 귀하가 언급한 것과 경쟁적인 제품 또는 서비스를 개발, 획득 또는 광고하는 것을 포함하되 이에 국한되지 않는 방식과 목적으로 제출물을 자유롭게 사용하거나 재배포할 것입니다.</li><br />
          <li>3. 귀하의 제출물을 검토하거나 아이디어를 개발할 의무는 없습니다.</li><br />
          <li>4. 귀하의 제출 및 당사의 검토에 의해 귀하와 당사 사이에 기밀 관계 또는 비밀 유지 의무가 생성되지 않습니다. 귀하가 제출하는 모든 것은 비기밀 및 비독점으로 간주됩니다. 당사는 귀하의 제출을 ​​받기 전에 유사한 아이디어, 제품 또는 기술에 대해 작업하고 있었는지 여부에 관계없이 귀하가 제출한 정보를 제한 없이 자유롭게 사용할 수 있습니다.</li>
        </ul>
        <br />
        <br />
        <span style={{color:'#3ab8cf'}}>피드백을 환영합니다. 피드백을 보내려면 support@16personalities.com</span> 으로 이메일을 보내주십시오 . 그러나 이 정책이 수락하거나 고려하는 것을 허용하지 않는 아이디어는 포함하지 마십시오.
        <br />
        <br />
        <h2>11. 제한된 보증/보증</h2>
        <br />
        <br />
        우리는 이 웹사이트 또는 우리가 귀하에게 판매할 수 있는 제품에 게시된 정보의 완전성 또는 정확성에 대해 어떠한 보증도 하지 않으며, 웹사이트를 계속 사용할 수 있거나 웹사이트에 있는 자료가 웹사이트는 최신 상태로 유지됩니다. 웹사이트는 '있는 그대로' 제공되며 당사는 사전 통지 없이 언제든지 웹사이트 및 서비스 제공을 중단할 수 있는 권리를 보유합니다.
        <br />
        <br />
        해당 법률이 허용하는 최대 범위 내에서 당사는 이 웹사이트 및 이 웹사이트의 사용과 관련된 모든 진술, 보증 및 조건을 배제합니다(만족스러운 품질, 목적에의 적합성 및/또는 본 웹사이트 이용 및 구매 약관에 명시된 것 이외의 합리적인 주의와 기술의 사용. 귀하가 웹사이트 또는 제품을 사용하는 경우 귀하는 그러한 사용의 결과로 이루어진 모든 행동 또는 결정에 대해 전적으로 책임이 있음을 확인합니다. 우리는 성격 평가를 포함하여 제품의 정확성에 대해 어떠한 진술이나 보증도 하지 않습니다.        
        <br />
        <br />
        이 웹사이트 또는 제품의 어떤 내용도 의학적, 심리학적, 모집, 비즈니스 또는 기타 조언으로 해석되어서는 안 됩니다. 모든 자료와 제품은 정보 제공의 목적으로만 사용됩니다.
        <br />
        <br />
        웹사이트에 제3자 웹사이트에 대한 링크가 포함되어 있는 경우, 당사는 제3자 웹사이트에 포함된 콘텐츠와 관련하여 어떠한 대표도 하지 않으며 귀하는 이러한 웹사이트를 사용하는 데 따른 위험 부담에 동의합니다. 당사는 귀하가 당사 웹사이트를 통해 방문하는 제3자 웹사이트와 계약 또는 계약의 일부를 구성하지 않습니다.
        <br />
        <br />
        <h2>12. 책임의 제한 및 배제</h2>
        <br />
        <br />
        당사는 불법적인 경우 귀하에 대한 당사의 책임을 어떤 식으로든 배제하거나 제한하지 않습니다. 따라서 본 이용 약관의 어떠한 내용도: (a) 과실로 인한 사망 또는 부상에 대한 당사 또는 귀하의 책임을 제한하거나 배제하지 않습니다. (b) 사기 또는 사기성 허위 진술에 대한 당사 또는 귀하의 책임을 제한하거나 배제합니다. (c) 해당 법률에서 허용하지 않는 방식으로 당사 또는 귀하의 책임을 제한합니다. 또는 (d) 해당 법률에 따라 배제될 수 없는 당사 또는 귀하의 책임을 배제합니다.
        <br />
        <br />
        이 섹션 및 본 이용 약관의 다른 부분에 명시된 책임의 제한 및 배제: (a) 이전 단락의 적용을 받습니다. (b) 계약, 불법 행위(과실 포함) 및 법적 의무 위반으로 인해 발생하는 책임을 포함하여 본 이용 약관 또는 본 이용 약관의 주제와 관련하여 발생하는 모든 책임에 적용됩니다.
        <br />
        <br />
        당사는 쟁의행위, 노동력 부족, 공급업체의 실패, 자연 재해, 운송 중단 또는 실패, 법적 또는 정부 개입 또는 당사의 합리적인 통제를 벗어난 기타 원인("불가항력").
        <br />
        <br />
        당사 제품은 업무용으로 의도되지 않았으며 제공되지도 않으며 귀하는 귀하의 책임하에 모든 비즈니스, 고용 또는 채용 상황에서 당사 제품을 사용합니다. 특히, 귀하가 비즈니스 용도로 당사 제품을 사용하는 한, 당사는 이익, 수입, 수익, 사용, 생산, 예상 절감액의 손실 또는 손해를 포함한(이에 국한되지 않음) 비즈니스 손실과 관련하여 귀하에게 책임을 지지 않습니다. , 사업, 계약, 상업적 기회 또는 영업권. 우리는 우리 제품의 사용과 관련하여 내려진 상업적 또는 인적 자원 결정에 대해 책임을 지지 않으며 부당하고 불공정한 해고를 포함하되 이에 국한되지 않는 고용 분쟁과 관련된 어떠한 책임도 지지 않습니다. 성격 유형에 관한 정보와 자료를 제공합니다. 이 정보는 관련 문제에 대한 포괄적인 범위를 제공할 수 없으며 제공할 의도도 없습니다. 우리의 콘텐츠는 항상 다른 정보, 조언 및 교육과 함께 사용해야 합니다.
        <br />
        <br />
        귀하는 당사의 콘텐츠 또는 자료를 본 후 귀하가 내리거나 구현한 모든 결정이 의학적 조언을 포함하여 귀하와 귀하의 고문이 알고 있어야 하는 다른 요소(저희가 제공하는 정보 제외)를 고려하여 내려졌는지 확인해야 합니다. 관련 전문가와 상의했습니다.
        <br />
        <br />
        당사는 당사의 과실로 인해 손해가 발생한 경우를 제외하고 당사 제품 사용과 관련된 정서적 또는 정신적 고통 또는 기타 피해와 관련하여 귀하에게 책임을 지지 않습니다.
        <br />
        <br />
        당사는 데이터, 데이터베이스 또는 소프트웨어의 손실 또는 손상과 관련하여 귀하에게 책임을 지지 않습니다(그러나 이는 귀하의 법적 권리에 영향을 미치지 않음).
        <br />
        <br />
        우리는 예측할 수 없는 손실이나 손해에 대해 책임을 지지 않습니다. 손실 또는 손해는 발생할 것이 분명하거나 계약 당시에 발생할 수 있음을 알고 있었던 경우(예: 판매 과정에서 당사와 논의한 경우) 예측할 수 있습니다.
        <br />
        <br />
        웹사이트에서 또는 웹사이트를 통해 제공된 정보를 기반으로 한 결정이나 조치는 전적으로 귀하의 재량과 위험에 따릅니다. 필요한 경우 전문적인 조언을 받아야 합니다.
        <br />
        <br />
        웹사이트에 게시된 콘텐츠에는 사용자가 제출한 견해 및 의견이 포함됩니다. 우리는 웹사이트 사용자의 견해나 의견을 지지하지 않습니다.
        <br />
        <br />
        웹사이트 사용으로 인해 다른 사용자와 분쟁이 발생하는 경우 귀하는 당사와 독립적으로 그러한 청구 또는 조치를 취하는 데 동의하고 그러한 분쟁으로 인해 발생하는 모든 청구, 책임 및 손해로부터 당사를 면제합니다.
        <br />
        <br />
        (본 약관의 책임 부인 및 배제에도 불구하고) 당사는 본 약관 및/또는 귀하의 웹사이트 및/또는 제품 사용과 관련하여 또는 이와 관련하여 귀하에 대한 책임이 있는 경우 해당 연도에 당사의 책임이 적용됩니다. 해당 연도에 본 약관에 따라 귀하가 지불한 금액에 대한 모든 청구에 대해 총계로 제한되며, 그러한 제한은 법이 허용하는 최대 한도까지입니다.
        <br />
        <br />
        <h2>13. 배상</h2>
        <br />
        <br />
        귀하는 손실, 손해, 비용, 부채 및 경비(법률 비용 및 당사의 법률 자문에 대한 클레임 또는 분쟁을 해결하기 위해 당사가 제3자에게 지불한 금액을 포함하되 이에 국한되지 않음)와 관련하여 당사를 완전히 보상하는 데 동의합니다. 고문) 귀하가 본 이용 약관의 조항을 위반하거나 귀하가 본 이용 약관의 조항을 위반했다는 주장으로 인해 발생하는 완전한 배상 기준으로 당사에 의해 발생하거나 피해를 입었습니다.
        <br />
        <br />
        <h2>14. 약관 위반</h2>
        <br />
        <br />
        본 이용 약관에 따른 당사의 다른 권리를 침해하지 않고, 귀하가 본 이용 약관을 어떤 식으로든 위반하는 경우, 당사는 웹사이트에 대한 귀하의 액세스 중지, 귀하의 액세스 금지를 포함하여 위반을 처리하는 데 적절하다고 판단되는 조치를 취할 수 있습니다. 웹사이트, 귀하의 IP 주소를 사용하는 컴퓨터가 웹사이트에 액세스하지 못하도록 차단, 귀하의 인터넷 서비스 제공업체에 연락하여 귀하의 웹사이트 액세스 차단 요청 및/또는 귀하에 대한 법원 소송 제기.
        <br />
        <br />
        <h2>15. 변형</h2>
        <br />
        <br />
        당사는 이 이용 약관을 수시로 수정할 수 있습니다. 개정된 이용약관은 개정된 이용약관이 웹사이트에 게시된 날부터 웹사이트 이용에 적용됩니다.
        <br />
        <br />
        <h2>16. 양도</h2>
        <br />
        <br />    
        당사는 귀하와의 계약을 다른 사람에게 양도할 수 있습니다. 당사는 귀하에게 통지하거나 귀하의 동의를 얻지 않고 본 사용 약관에 따라 당사의 권리 및/또는 의무를 양도, 하도급 또는 달리 처리할 수 있습니다. 당사는 그러한 양도가 계약에 따른 귀하의 권리를 박탈하지 않도록 할 것입니다.
        <br />
        <br />  
        본 계약에 따라 귀하의 권리를 이전하려면 당사의 동의가 필요합니다. 귀하는 먼저 당사의 동의를 얻지 않고는 본 이용 약관에 따른 귀하의 권리 및/또는 의무를 이전, 하청 계약하거나 달리 처리할 수 없습니다.
        <br />
        <br />
          <h2>17. 분리가능성</h2>
        <br />
        <br />
        법원이 이 계약의 일부를 불법으로 판명하더라도 나머지는 계속 유효합니다. 본 약관의 각 단락은 별도로 운영됩니다. 법원이나 관련 당국이 그 중 하나가 불법이라고 결정하는 경우, 나머지 단락은 완전한 효력을 유지합니다.
        <br />
        <br />
        <h2>18. 제3자 권리의 배제</h2>
        <br />
        <br />
        다른 누구도 이 계약에 따라 어떠한 권리도 갖지 않습니다. 이 계약은 귀하와 당사 사이에 있습니다. 다른 사람은 약관을 시행할 권리가 없습니다. 우리 중 어느 쪽도 계약을 종료하거나 본 약관을 변경하기 위해 다른 사람의 동의를 얻을 필요가 없습니다.
        <br />
        <br />
        <h2>19. 완전한 합의</h2>
        <br />
        <br />
        본 이용 약관은 당사의 개인정보 보호 및 환불 및 취소 정책과 함께 귀하의 웹사이트 사용과 관련하여 귀하와 당사 간의 완전한 합의를 구성하며 귀하의 웹사이트 사용과 관련하여 이전의 모든 계약을 대체합니다. 본 약관의 어떠한 내용도 귀하의 법적 권리를 박탈하지 않습니다.
        <br />
        <br />
        <h2>20. 본 계약 이행의 지연</h2>
        <br />
        <br />
        이 계약의 시행이 지연되더라도 나중에 시행할 수 있습니다. 당사가 귀하가 본 약관에 따라 귀하가 해야 할 일을 하도록 즉시 주장하지 않거나 귀하가 본 계약을 위반하는 것과 관련하여 귀하에 대한 조치를 지연한다고 해서 귀하가 그러한 일을 하지 않아도 된다는 의미는 아니며 그것은 우리가 나중에 귀하에 대해 조치를 취하는 것을 막지 않습니다. 예를 들어, 지불을 놓치고 추적하지 않지만 제품을 계속 제공하는 경우 나중에 지불하도록 요구할 수 있습니다.
        <br />
        <br />
        <h2>21. 법률 및 소송</h2>
        <br />
        <br />
        이 약관은 영국법의 적용을 받으며 귀하는 영국 법원에서 제품과 관련하여 법적 소송을 제기할 수 있습니다. 스코틀랜드에 거주하는 경우 스코틀랜드 또는 영국 법원에서 제품과 관련된 법적 소송을 제기할 수 있습니다. 북아일랜드에 거주하는 경우 북아일랜드 또는 영국 법원에서 제품과 관련된 법적 소송을 제기할 수 있습니다. 귀하가 영국 이외의 지역에 거주하는 경우 당사는 영국 법원에서만 서로에 대해 법적 조치를 취하기로 동의합니다(귀하의 국가에서 귀하에게 적용되고 이 조건이 우선하지 않는 모든 소비자 보호에 따름). 그러나 당사는 어느 국가에서나 당사의 지적 재산권(IPR)을 보호할 수 있습니다.
        <br />
        <br />
        <h2>22. 우리의 세부 사항</h2>
        <br />
        <br />
        우리 회사의 전체 이름은 NERIS Analytics Limited입니다.
        <br />
        <br />
        우리는 회사 하우스 등록 번호 8646330으로 잉글랜드와 웨일즈에 등록되어 있습니다.
        <br />
        <br />
        등록된 주소와 사업장은 Nine Hills Road, Cambridge, CB2 1GE, United Kingdom입니다.
        <br />
        <br />
        VAT 번호는 GB205808813입니다.
        <br />
        <br />
        <span style={{color:'#3ab8cf'}}>우려 사항이나 불만 사항이 있는 경우 support@16personalities.com</span> 으로 이메일을 보내 문의할 수 있습니다 .
        <br />
        <br />
        <h2>23. 대체 분쟁 해결</h2>
        <br />
        <br />
        대안적 분쟁 해결(ADR)은 독립 기관이 귀하가 법원에 가지 않고도 분쟁의 사실을 고려하고 해결하려고 하는 프로세스입니다. 불만 사항을 처리한 방식이 마음에 들지 않고 내부 불만 사항 처리 절차를 모두 마친 경우 불만 사항을 해결할 수 없으며 ADR에 대한 접근 방식은 무엇이며 귀하가 원할 경우 제안하는 ADR 엔터티를 알려드립니다. ADR을 사용합니다.
        <br />
        <br />
        <h2>24. 귀하의 법적 권리 요약</h2>
        <br />
        <br />
        우리는 이 계약에 부합하는 제품을 공급할 법적 의무가 있습니다. 제품과 관련된 귀하의 주요 법적 권리에 대한 요약은 아래 상자를 참조하십시오. 본 약관의 어떠한 내용도 귀하의 법적 권리에 영향을 미치지 않습니다.
        <br />
        <br />
        <div style={{borderLeft:'3px solid #44AF69', paddingLeft:'10px'}}>
          <strong>귀하의 주요 법적 권리 요약</strong>
          <br />
        <br />
        이것은 귀하의 주요 법적 권리에 대한 요약입니다. 여기에는 특정 예외가 적용됩니다. 자세한 내용은 시민 조언 웹사이트 를 방문하십시오 .
        <br />
        <br />
        제품이 디지털 콘텐츠 (예: 전자책)인 경우 소비자 권리법 2015에 따르면 디지털 콘텐츠는 설명된 대로 목적에 적합하고 만족스러운 품질이어야 합니다.
        <br />
        <br />
        <ul>
          <li>1. 디지털 콘텐츠에 결함이 있는 경우 수리 또는 교체를 받을 수 있습니다.</li><br />
          <li>2. 결함이 수정될 수 없거나 상당한 불편 없이 합리적인 시간 내에 수정되지 않으면 일부 또는 전체 금액을 환불받을 수 있습니다.</li> <br />
          <li>3. 결함으로 인해 장치가 손상되었음을 입증할 수 있고 당사가 합당한 주의와 기술을 사용하지 않은 경우 수리 또는 보상을 받을 자격이 있을 수 있습니다.</li>
        </ul>
        <br />
        <br />
        조항 (5)도 참조하십시오.
        <br />
        <br />
        귀하의 제품이 서비스 (예: 당사 툴킷에 대한 액세스)인 경우 2015년 소비자 권리법에서는 다음과 같이 명시합니다.
        <br />
        <br />  
        <ul>
          <li>1. 서비스가 합리적인 주의와 기술로 수행되지 않은 경우 서비스를 반복하거나 수정하도록 요청할 수 있으며, 수정할 수 없는 경우 일부 금액을 환불받을 수 있습니다.</li><br />
          <li>2. 사전에 가격에 동의하지 않은 경우 지불해야 하는 금액이 합리적이어야 합니다.</li><br />
          <li>3. 사전에 시간을 합의하지 않았다면 합리적인 시간 내에 이루어져야 합니다.</li>
        </ul>

        <br />
        <br />
        조항 (5)도 참조하십시오.
        <br />
        </div>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{background:'#F19904', border:'none'}}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ModalPg = (props) => {
    
  const [modalShow, setModalShow] = React.useState(false);
      
    return (
      <>
      <Button variant="primary" onClick={() => setModalShow(true) } style={{background:'none', color:'#000', border:'none', fontSize:'1.125rem', display:'inline', padding:'0', margin:'0'}}>
          이용약관
      </Button>

      <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
      />
  </>
    );
};

export default ModalPg;