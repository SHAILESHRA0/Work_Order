const API_BASE_URL = 'http://localhost:3000/api';

export const API_ENDPOINTS = {
    CREATE_WORK_ORDER: `${API_BASE_URL}/workorders/create`,
    CHECK_WORK_ORDER: (orderNo) => `${API_BASE_URL}/workorders/by-number/${orderNo}`,
    UPDATE_WORK_ORDER: (id) => `${API_BASE_URL}/workorders/${id}`,
    PENDING_WORK_ORDERS: `${API_BASE_URL}/workorders/pending`,
    WORK_ORDER_LIST: `${API_BASE_URL}/workorders/list`,
    COMPLETE_WORK_ORDER: (id) => `${API_BASE_URL}/workorders/${id}/complete`
};
