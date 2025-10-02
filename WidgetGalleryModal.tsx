
import React from 'react';
import Modal from './Modal';

interface WidgetGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWidget: (widgetType: string) => void;
}

const WidgetGalleryModal: React.FC<WidgetGalleryModalProps> = ({ isOpen, onClose, onSelectWidget }) => {
  // This component will display a gallery of predefined widgets that the user can add to their dashboard.
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="위젯 갤러리">
      <div className="p-4 text-center">
        <p className="text-gray-500">위젯 갤러리 기능은 현재 준비 중입니다.</p>
        {/* Placeholder for widget previews */}
      </div>
    </Modal>
  );
};

export default WidgetGalleryModal;