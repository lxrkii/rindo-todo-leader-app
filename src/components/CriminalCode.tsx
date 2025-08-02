import React from "react";

interface CriminalCodeProps {
  isOpen: boolean;
  onClose: () => void;
}

const CriminalCode: React.FC<CriminalCodeProps> = ({ isOpen, onClose }) => {
  const criminalCodeText = `
    <div class="criminal-code-content">
      <h1 style="text-align: center; color: #22c55e; margin-bottom: 2rem;">
        УГОЛОВНЫЙ КОДЕКС ШТАТА САН-АНДРЕАС
      </h1>

      <div style="margin-bottom: 2rem;">
        <p style="line-height: 1.6; margin: 1rem 0;">
          <strong style="color: #22c55e;">Уголовный кодекс</strong> — основной закон штата Сан-Андреас, устанавливающий уголовную ответственность за преступления.
        </p>
      </div>

      <div style="margin-bottom: 2rem;">
        <h2 style="color: #22c55e; border-bottom: 2px solid #22c55e; padding-bottom: 0.5rem;">
          ОБЩАЯ ЧАСТЬ
        </h2>

        <h3 style="color: #22c55e; border-bottom: 1px solid #22c55e; padding-bottom: 0.5rem; margin: 1.5rem 0 1rem;">
          РАЗДЕЛ I. УГОЛОВНЫЙ ЗАКОН
        </h3>

        <h4 style="color: #22c55e; margin: 1.5rem 0 1rem;">ГЛАВА I. Задачи и принципы Уголовного кодекса Штата Сан-Андреас</h4>

        <h5 style="color: #22c55e; margin: 1.5rem 0 1rem;">Статья 1. Уголовное законодательство Штата Сан-Андреас</h5>
        <div style="margin-left: 20px; margin-bottom: 1rem;">
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 1</strong> Уголовное законодательство Штата Сан-Андреас состоит из настоящего Кодекса. Новые законы, предусматривающие уголовную ответственность, подлежат включению в настоящий Кодекс.
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 2</strong> Настоящий Кодекс основывается на Конституции Штата Сан-Андреас и общепризнанных принципах и нормах международного права.
          </p>
        </div>

        <h5 style="color: #22c55e; margin: 1.5rem 0 1rem;">Статья 1.1. Задачи Уголовного кодекса Штата Сан-Андреас</h5>
        <div style="margin-left: 20px; margin-bottom: 1rem;">
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 1</strong> Задачами настоящего Кодекса являются: охрана прав и свобод человека и гражданина, собственности, общественного порядка и общественной безопасности, окружающей среды, конституционного строя Штата Сан-Андреас от преступных посягательств, обеспечение мира и безопасности человечества, а также предупреждение преступлений.
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 2</strong> Для осуществления этих задач настоящий Кодекс устанавливает основание и принципы уголовной ответственности, определяет, какие опасные для личности, общества или государства деяния признаются преступлениями, и устанавливает виды наказаний и иные меры уголовно-правового характера за совершение преступлений.
          </p>
        </div>

        <h5 style="color: #22c55e; margin: 1.5rem 0 1rem;">Статья 1.2. Принцип законности</h5>
        <div style="margin-left: 20px; margin-bottom: 1rem;">
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 1</strong> Преступность деяния, а также его наказуемость и иные уголовно-правовые последствия определяются только настоящим Кодексом.
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 2</strong> Применение уголовного закона по аналогии не допускается.
          </p>
        </div>

        <h5 style="color: #22c55e; margin: 1.5rem 0 1rem;">Статья 1.3. Принцип равенства граждан перед законом</h5>
        <div style="margin-left: 20px; margin-bottom: 1rem;">
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 1</strong> Лица, совершившие преступления, равны перед законом и подлежат уголовной ответственности независимо от пола, расы, национальности, языка, происхождения, имущественного и должностного положения, места жительства, отношения к религии, убеждений, принадлежности к общественным объединениям, а также других обстоятельств.
          </p>
        </div>

        <h5 style="color: #22c55e; margin: 1.5rem 0 1rem;">Статья 1.4. Принцип вины</h5>
        <div style="margin-left: 20px; margin-bottom: 1rem;">
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 1</strong> Лицо подлежит уголовной ответственности только за те общественно опасные действия (бездействие) и наступившие общественно опасные последствия, в отношении которых установлена его вина.
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 2</strong> Объективное вменение, то есть уголовная ответственность за невиновное причинение вреда, не допускается.
          </p>
        </div>

        <h5 style="color: #22c55e; margin: 1.5rem 0 1rem;">Статья 1.5. Принцип справедливости</h5>
        <div style="margin-left: 20px; margin-bottom: 1rem;">
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 1</strong> Наказание и иные меры уголовно-правового характера, применяемые к лицу, совершившему преступление, должны быть справедливыми, то есть соответствовать характеру и степени общественной опасности преступления, обстоятельствам его совершения и личности виновного.
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 2</strong> Никто не может нести уголовную ответственность дважды за одно и то же преступление.
          </p>
        </div>

        <h5 style="color: #22c55e; margin: 1.5rem 0 1rem;">Статья 1.6. Принцип гуманизма</h5>
        <div style="margin-left: 20px; margin-bottom: 1rem;">
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 1</strong> Уголовное законодательство Штата San Andreas обеспечивает безопасность человека.
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 2</strong> Наказание и иные меры уголовно-правового характера, применяемые к лицу, совершившему преступление, не могут иметь своей целью причинение физических страданий или унижение человеческого достоинства.
          </p>
        </div>

        <h5 style="color: #22c55e; margin: 1.5rem 0 1rem;">Статья 1.7. Основание уголовной ответственности</h5>
        <div style="margin-left: 20px; margin-bottom: 1rem;">
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 1</strong> Основанием уголовной ответственности является совершение деяния, содержащего все признаки состава преступления, предусмотренного настоящим Кодексом.
          </p>
        </div>

        <h5 style="color: #22c55e; margin: 1.5rem 0 1rem;">Статья 1.8. Действие уголовного закона в отношении лиц, совершивших преступление на территории штата Сан-Андреас</h5>
        <div style="margin-left: 20px; margin-bottom: 1rem;">
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 1</strong> Лицо, совершившее преступление на территории штата Сан-Андреас, подлежит уголовной ответственности по настоящему Кодексу.
          </p>
        </div>

        <h5 style="color: #22c55e; margin: 1.5rem 0 1rem;">Статья 1.9. Судимость</h5>
        <div style="margin-left: 20px; margin-bottom: 1rem;">
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            Судимость, дополнительный вид уголовной ответственности, при котором лицо не может быть трудоустроено в государственные организации без погашения судимости.
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong>Судимость назначается:</strong>
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">а)</strong> при наличии пометки "S" в преступлении
          </p>
        </div>

        <h5 style="color: #22c55e; margin: 1.5rem 0 1rem;">Статья 1.10. Действие уголовного закона во времени</h5>
        <div style="margin-left: 20px; margin-bottom: 1rem;">
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 1.</strong> Преступность и наказуемость деяния определяются уголовным законом, действовавшим во время совершения этого деяния.
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 2.</strong> Временем совершения преступления признается время совершения общественно опасного действия (бездействия) независимо от времени наступления последствий.
          </p>
        </div>

        <h5 style="color: #22c55e; margin: 1.5rem 0 1rem;">Статья 1.11. Обратная сила уголовного закона</h5>
        <div style="margin-left: 20px; margin-bottom: 1rem;">
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 1</strong> Уголовный закон, устраняющий преступность деяния, смягчающий наказание или иным образом улучшающий положение лица, совершившего преступление, имеет обратную силу, то есть распространяется на лиц, совершивших соответствующие деяния до вступления такого закона в силу, в том числе на лиц, отбывающих наказание или отбывших наказание, но имеющих судимость.
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 2</strong> Уголовный закон, устанавливающий преступность деяния, усиливающий наказание или иным образом ухудшающий положение лица, обратной силы не имеет.
          </p>
        </div>

        <h5 style="color: #22c55e; margin: 1.5rem 0 1rem;">Статья 1.12. Действие уголовного закона в отношении лиц, совершивших преступление вне пределов штата Сан-Андреас</h5>
        <div style="margin-left: 20px; margin-bottom: 1rem;">
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 1</strong> Граждане штата Сан-Андреас и постоянно проживающие в штате Сан-Андреас лица без гражданства, совершившие вне пределов штата Сан-Андреас преступление против интересов, охраняемых настоящим Кодексом, подлежат уголовной ответственности в соответствии с настоящим Кодексом, если в отношении этих лиц по данному преступлению не имеется решения суда иностранного государства.
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 2</strong> Военнослужащие воинских частей штата Сан-Андреас, дислоцирующихся за пределами штата Сан-Андреас, за преступления, совершенные на территории иностранного государства, несут уголовную ответственность по настоящему Кодексу, если иное не предусмотрено международным договором штата Сан-Андреас.
          </p>
        </div>

        <h5 style="color: #22c55e; margin: 1.5rem 0 1rem;">Статья 1.13. Выдача лиц, совершивших преступление</h5>
        <div style="margin-left: 20px; margin-bottom: 1rem;">
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 1</strong> Граждане штата Сан-Андреас, совершившие преступление на территории иностранного государства, не подлежат выдаче этому государству.
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 2</strong> Иностранные граждане и лица без гражданства, совершившие преступление вне пределов штата Сан-Андреас и находящиеся на территории штата Сан-Андреас, могут быть выданы иностранному государству для привлечения к уголовной ответственности или отбывания наказания в соответствии с международным договором штата Сан-Андреас.
          </p>
        </div>
      </div>

      <div style="margin-bottom: 2rem;">
        <h3 style="color: #22c55e; border-bottom: 1px solid #22c55e; padding-bottom: 0.5rem; margin: 1.5rem 0 1rem;">
          РАЗДЕЛ II. ПРЕСТУПЛЕНИЕ
        </h3>

        <h4 style="color: #22c55e; margin: 1.5rem 0 1rem;">ГЛАВА II. Понятие преступления, виды преступлений и вина</h4>

        <h5 style="color: #22c55e; margin: 1.5rem 0 1rem;">Статья 2. Понятие преступления</h5>
        <div style="margin-left: 20px; margin-bottom: 1rem;">
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 1</strong> Преступлением признается виновно совершенное общественно опасное деяние, запрещенное настоящим Кодексом под угрозой наказания.
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 2</strong> Не является преступлением действие (бездействие), хотя формально и содержащее признаки какого-либо деяния, предусмотренного настоящим Кодексом, но в силу малозначительности не представляющее общественной опасности.
          </p>
        </div>

        <h5 style="color: #22c55e; margin: 1.5rem 0 1rem;">Статья 2.1. Рецидив преступлений</h5>
        <div style="margin-left: 20px; margin-bottom: 1rem;">
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 1</strong> Рецидивом преступлений признается совершение умышленного преступления лицом, имеющим судимость за ранее совершенное умышленное преступление.
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">Рецидив преступлений признается опасным:</strong>
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">а)</strong> при совершении лицом тяжкого преступления, за которое оно осуждается к реальному лишению свободы, если ранее это лицо два или более раза было осуждено за умышленное преступление средней тяжести к лишению свободы;
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">б)</strong> при совершении лицом тяжкого преступления, если ранее оно было осуждено за тяжкое или особо тяжкое преступление к реальному лишению свободы.
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">Рецидив преступлений признается особо опасным:</strong>
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">а)</strong> при совершении лицом тяжкого преступления, за которое оно осуждается к реальному лишению свободы, если ранее это лицо два раза было осуждено за тяжкое преступление к реальному лишению свободы;
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">б)</strong> при совершении лицом особо тяжкого преступления, если ранее оно два раза было осуждено за тяжкое преступление или ранее осуждалось за особо тяжкое преступление.
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">При признании рецидива преступлений не учитываются:</strong>
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">а)</strong> судимости за умышленные преступления небольшой тяжести;
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 2</strong> Рецидив преступлений влечет более строгое наказание на основании и в пределах, предусмотренных настоящим Кодексом, а также иные последствия, предусмотренные законодательством штата Сан-Андреас.
          </p>
        </div>

        <h5 style="color: #22c55e; margin: 1.5rem 0 1rem;">Статья 2.2. Формы вины</h5>
        <div style="margin-left: 20px; margin-bottom: 1rem;">
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 1</strong> Виновным в преступлении признается лицо, совершившее деяние умышленно или по неосторожности.
          </p>
          <p style="line-height: 1.6; margin: 0.5rem 0;">
            <strong style="color: #22c55e;">ч. 2</strong> Деяние, совершенное только по неосторожности, признается преступлением лишь в случае, когда это специально предусмотрено статьей настоящего Кодекса.
          </p>
        </div>
      </div>

      <div style="text-align: center; margin-top: 3rem; padding: 2rem; background: #1f2937; border-radius: 0.5rem;">
        <p style="color: #22c55e; font-weight: bold; margin: 0;">
          Уголовный кодекс долбаёбов
        </p>
        <p style="color: #22c55e; margin: 0.5rem 0 0;">
          На продолжение всем похуй...
        </p>
      </div>
    </div>
  `;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl max-w-4xl max-h-[90vh] overflow-auto border border-gray-700 shadow-2xl shadow-gray-900/50">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-300">
            Уголовный Кодекс штата Сан-Андреас
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded-lg transition-all duration-200"
            title="Закрыть"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-white">
          <div
            dangerouslySetInnerHTML={{ __html: criminalCodeText }}
            className="criminal-code-text"
          />
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-900 border-t border-gray-700 p-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default CriminalCode; 