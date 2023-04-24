<?php
namespace Study\KO\Controller\NewPage;

class Index extends \Magento\Framework\App\Action\Action
{
    /**
     * @param \Magento\Framework\App\Action\Context $context
     */
    public function __construct(
       \Magento\Framework\App\Action\Context $context
    )
    {
        return parent::__construct($context);
    }
    
    public function execute() {
        $this->_view->loadLayout();
        $this->_view->getLayout();
        $this->_view->renderLayout();
    } 
}
