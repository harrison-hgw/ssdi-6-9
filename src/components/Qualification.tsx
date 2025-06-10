import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Phone, FileText } from 'lucide-react';

const Qualification: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false, false]);
  const phoneNumber = '1-844-549-4126';

  const qualifications = [
    {
      icon: <AlertCircle size={24} className="text-[#b42033]" />,
      title: "Unable to work due to medical condition",
      description: "Your medical condition prevents you from performing substantial work activities."
    },
    {
      icon: <FileText size={24} className="text-[#b42033]" />,
      title: "Condition expected to last 12+ months",
      description: "Your disability is expected to last at least 12 months or result in death."
    },
    {
      icon: <CheckCircle size={24} className="text-[#b42033]" />,
      title: "Have worked and paid into Social Security",
      description: "You have a work history and have paid Social Security taxes through employment."
    },
    {
      icon: <FileText size={24} className="text-[#b42033]" />,
      title: "Medical documentation of your condition",
      description: "You have medical records documenting your disability and its impact on your ability to work."
    }
  ];

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const qualifyingCount = checkedItems.filter(item => item).length;
  const isQualified = qualifyingCount >= 3;

  return (
    <section id="qualification" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Do You Qualify for
            <span className="block text-[#b42033]">Disability Benefits?</span>
          </h2>
          <p className="text-xl text-gray-600">
            Check the boxes below to see if you may be eligible for Social Security Disability benefits:
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="space-y-6">
            {qualifications.map((qualification, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex-shrink-0 mt-1">
                  <input
                    type="checkbox"
                    id={`qualification-${index}`}
                    checked={checkedItems[index]}
                    onChange={() => handleCheckboxChange(index)}
                    className="w-5 h-5 text-[#b42033] bg-white border-gray-300 rounded focus:ring-[#b42033] focus:ring-2"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor={`qualification-${index}`}
                    className="flex items-start space-x-3 cursor-pointer"
                  >
                    <div className="flex-shrink-0">
                      {qualification.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {qualification.title}
                      </h3>
                      <p className="text-gray-600">
                        {qualification.description}
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          <div className="mt-8 p-6 rounded-lg bg-gray-50 border-l-4 border-[#b42033]">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex-shrink-0">
                {isQualified ? (
                  <CheckCircle size={24} className="text-green-500" />
                ) : (
                  <AlertCircle size={24} className="text-yellow-500" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {isQualified ? "You may qualify for benefits!" : "You might still qualify"}
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              {isQualified 
                ? "Based on your responses, you may be eligible for Social Security Disability benefits. Contact us for a free consultation to discuss your case in detail."
                : "Even if you don't meet all criteria above, you may still qualify for benefits. Many factors are considered in disability determinations. Contact us for a free evaluation of your case."
              }
            </p>
            <p className="text-sm text-gray-500">
              * This is a preliminary assessment. Eligibility is determined by the Social Security Administration based on detailed review of your case.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Get Your Free Case Evaluation
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Our experienced team will review your case and help you understand your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center space-x-2 bg-[#b42033] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#a01b2a] transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              <span>Call {phoneNumber}</span>
            </a>
            <button className="bg-white text-[#b42033] px-8 py-4 rounded-lg text-lg font-semibold border-2 border-[#b42033] hover:bg-[#b42033] hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl">
              Request Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
