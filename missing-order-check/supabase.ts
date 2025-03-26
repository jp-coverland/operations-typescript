export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      _Orders: {
        Row: {
          billing_address_city: string | null
          billing_address_country: string | null
          billing_address_line_1: string | null
          billing_address_line_2: string | null
          billing_address_postal_code: string | null
          billing_address_state: string | null
          billing_customer_name: string | null
          card_amount: number | null
          card_brand: string | null
          card_exp_month: string | null
          card_exp_year: string | null
          card_fingerprint: string | null
          card_funding: string | null
          card_last_four: string | null
          created_at: string | null
          created_at_pst: string | null
          currency: string | null
          customer_email: string | null
          customer_id: number | null
          customer_name: string | null
          customer_phone: string | null
          id: number
          notes: string | null
          order_date: string | null
          order_id: string | null
          payment_date: string | null
          payment_gateway: string | null
          payment_gateway_customer_id: string | null
          payment_method: string | null
          payment_method_id: string | null
          payment_status: string | null
          review_invitation_last_attempt: string | null
          review_invitation_status: string | null
          ship_by_date: string | null
          shipping_address_city: string | null
          shipping_address_country: string | null
          shipping_address_line_1: string | null
          shipping_address_line_2: string | null
          shipping_address_postal_code: string | null
          shipping_address_state: string | null
          shipping_carrier: string | null
          shipping_confirmation_email_sent: boolean | null
          shipping_confirmation_email_sent_by: string | null
          shipping_confirmation_email_sent_date: string | null
          shipping_previous_status: string | null
          shipping_service: string | null
          shipping_status: string | null
          shipping_status_last_updated: string | null
          shipping_status_last_updated_pst: string | null
          shipping_tracking_number: string | null
          skus: string | null
          status: string | null
          total_amount: number | null
          total_discount_amount: number | null
          total_original_amount: number | null
          total_tax: number | null
          transaction_id: string | null
          updated_at: string | null
          wallet_type: string | null
        }
        Insert: {
          billing_address_city?: string | null
          billing_address_country?: string | null
          billing_address_line_1?: string | null
          billing_address_line_2?: string | null
          billing_address_postal_code?: string | null
          billing_address_state?: string | null
          billing_customer_name?: string | null
          card_amount?: number | null
          card_brand?: string | null
          card_exp_month?: string | null
          card_exp_year?: string | null
          card_fingerprint?: string | null
          card_funding?: string | null
          card_last_four?: string | null
          created_at?: string | null
          created_at_pst?: string | null
          currency?: string | null
          customer_email?: string | null
          customer_id?: number | null
          customer_name?: string | null
          customer_phone?: string | null
          id?: number
          notes?: string | null
          order_date?: string | null
          order_id?: string | null
          payment_date?: string | null
          payment_gateway?: string | null
          payment_gateway_customer_id?: string | null
          payment_method?: string | null
          payment_method_id?: string | null
          payment_status?: string | null
          review_invitation_last_attempt?: string | null
          review_invitation_status?: string | null
          ship_by_date?: string | null
          shipping_address_city?: string | null
          shipping_address_country?: string | null
          shipping_address_line_1?: string | null
          shipping_address_line_2?: string | null
          shipping_address_postal_code?: string | null
          shipping_address_state?: string | null
          shipping_carrier?: string | null
          shipping_confirmation_email_sent?: boolean | null
          shipping_confirmation_email_sent_by?: string | null
          shipping_confirmation_email_sent_date?: string | null
          shipping_previous_status?: string | null
          shipping_service?: string | null
          shipping_status?: string | null
          shipping_status_last_updated?: string | null
          shipping_status_last_updated_pst?: string | null
          shipping_tracking_number?: string | null
          skus?: string | null
          status?: string | null
          total_amount?: number | null
          total_discount_amount?: number | null
          total_original_amount?: number | null
          total_tax?: number | null
          transaction_id?: string | null
          updated_at?: string | null
          wallet_type?: string | null
        }
        Update: {
          billing_address_city?: string | null
          billing_address_country?: string | null
          billing_address_line_1?: string | null
          billing_address_line_2?: string | null
          billing_address_postal_code?: string | null
          billing_address_state?: string | null
          billing_customer_name?: string | null
          card_amount?: number | null
          card_brand?: string | null
          card_exp_month?: string | null
          card_exp_year?: string | null
          card_fingerprint?: string | null
          card_funding?: string | null
          card_last_four?: string | null
          created_at?: string | null
          created_at_pst?: string | null
          currency?: string | null
          customer_email?: string | null
          customer_id?: number | null
          customer_name?: string | null
          customer_phone?: string | null
          id?: number
          notes?: string | null
          order_date?: string | null
          order_id?: string | null
          payment_date?: string | null
          payment_gateway?: string | null
          payment_gateway_customer_id?: string | null
          payment_method?: string | null
          payment_method_id?: string | null
          payment_status?: string | null
          review_invitation_last_attempt?: string | null
          review_invitation_status?: string | null
          ship_by_date?: string | null
          shipping_address_city?: string | null
          shipping_address_country?: string | null
          shipping_address_line_1?: string | null
          shipping_address_line_2?: string | null
          shipping_address_postal_code?: string | null
          shipping_address_state?: string | null
          shipping_carrier?: string | null
          shipping_confirmation_email_sent?: boolean | null
          shipping_confirmation_email_sent_by?: string | null
          shipping_confirmation_email_sent_date?: string | null
          shipping_previous_status?: string | null
          shipping_service?: string | null
          shipping_status?: string | null
          shipping_status_last_updated?: string | null
          shipping_status_last_updated_pst?: string | null
          shipping_tracking_number?: string | null
          skus?: string | null
          status?: string | null
          total_amount?: number | null
          total_discount_amount?: number | null
          total_original_amount?: number | null
          total_tax?: number | null
          transaction_id?: string | null
          updated_at?: string | null
          wallet_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "_Orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      _Orders_20240812_backup: {
        Row: {
          billing_address_city: string | null
          billing_address_country: string | null
          billing_address_line_1: string | null
          billing_address_line_2: string | null
          billing_address_postal_code: string | null
          billing_address_state: string | null
          billing_customer_name: string | null
          card_amount: number | null
          card_brand: string | null
          card_fingerprint: string | null
          card_funding: string | null
          created_at: string | null
          created_at_pst: string | null
          currency: string | null
          customer_email: string | null
          customer_id: number | null
          customer_name: string | null
          customer_phone: string | null
          id: number | null
          notes: string | null
          order_date: string | null
          order_id: string | null
          payment_date: string | null
          payment_gateway: string | null
          payment_gateway_customer_id: string | null
          payment_method: string | null
          payment_method_id: string | null
          payment_status: string | null
          shipping_address_city: string | null
          shipping_address_country: string | null
          shipping_address_line_1: string | null
          shipping_address_line_2: string | null
          shipping_address_postal_code: string | null
          shipping_address_state: string | null
          shipping_carrier: string | null
          shipping_previous_status: string | null
          shipping_service: string | null
          shipping_status: string | null
          shipping_status_last_updated: string | null
          shipping_status_last_updated_pst: string | null
          shipping_tracking_number: string | null
          skus: string | null
          status: string | null
          total_amount: number | null
          total_discount_amount: number | null
          total_original_amount: number | null
          transaction_id: string | null
          updated_at: string | null
          wallet_type: string | null
        }
        Insert: {
          billing_address_city?: string | null
          billing_address_country?: string | null
          billing_address_line_1?: string | null
          billing_address_line_2?: string | null
          billing_address_postal_code?: string | null
          billing_address_state?: string | null
          billing_customer_name?: string | null
          card_amount?: number | null
          card_brand?: string | null
          card_fingerprint?: string | null
          card_funding?: string | null
          created_at?: string | null
          created_at_pst?: string | null
          currency?: string | null
          customer_email?: string | null
          customer_id?: number | null
          customer_name?: string | null
          customer_phone?: string | null
          id?: number | null
          notes?: string | null
          order_date?: string | null
          order_id?: string | null
          payment_date?: string | null
          payment_gateway?: string | null
          payment_gateway_customer_id?: string | null
          payment_method?: string | null
          payment_method_id?: string | null
          payment_status?: string | null
          shipping_address_city?: string | null
          shipping_address_country?: string | null
          shipping_address_line_1?: string | null
          shipping_address_line_2?: string | null
          shipping_address_postal_code?: string | null
          shipping_address_state?: string | null
          shipping_carrier?: string | null
          shipping_previous_status?: string | null
          shipping_service?: string | null
          shipping_status?: string | null
          shipping_status_last_updated?: string | null
          shipping_status_last_updated_pst?: string | null
          shipping_tracking_number?: string | null
          skus?: string | null
          status?: string | null
          total_amount?: number | null
          total_discount_amount?: number | null
          total_original_amount?: number | null
          transaction_id?: string | null
          updated_at?: string | null
          wallet_type?: string | null
        }
        Update: {
          billing_address_city?: string | null
          billing_address_country?: string | null
          billing_address_line_1?: string | null
          billing_address_line_2?: string | null
          billing_address_postal_code?: string | null
          billing_address_state?: string | null
          billing_customer_name?: string | null
          card_amount?: number | null
          card_brand?: string | null
          card_fingerprint?: string | null
          card_funding?: string | null
          created_at?: string | null
          created_at_pst?: string | null
          currency?: string | null
          customer_email?: string | null
          customer_id?: number | null
          customer_name?: string | null
          customer_phone?: string | null
          id?: number | null
          notes?: string | null
          order_date?: string | null
          order_id?: string | null
          payment_date?: string | null
          payment_gateway?: string | null
          payment_gateway_customer_id?: string | null
          payment_method?: string | null
          payment_method_id?: string | null
          payment_status?: string | null
          shipping_address_city?: string | null
          shipping_address_country?: string | null
          shipping_address_line_1?: string | null
          shipping_address_line_2?: string | null
          shipping_address_postal_code?: string | null
          shipping_address_state?: string | null
          shipping_carrier?: string | null
          shipping_previous_status?: string | null
          shipping_service?: string | null
          shipping_status?: string | null
          shipping_status_last_updated?: string | null
          shipping_status_last_updated_pst?: string | null
          shipping_tracking_number?: string | null
          skus?: string | null
          status?: string | null
          total_amount?: number | null
          total_discount_amount?: number | null
          total_original_amount?: number | null
          transaction_id?: string | null
          updated_at?: string | null
          wallet_type?: string | null
        }
        Relationships: []
      }
      _Orders_20240815_forIDFix_backup: {
        Row: {
          billing_address_city: string | null
          billing_address_country: string | null
          billing_address_line_1: string | null
          billing_address_line_2: string | null
          billing_address_postal_code: string | null
          billing_address_state: string | null
          billing_customer_name: string | null
          card_amount: number | null
          card_brand: string | null
          card_fingerprint: string | null
          card_funding: string | null
          created_at: string | null
          created_at_pst: string | null
          currency: string | null
          customer_email: string | null
          customer_id: number | null
          customer_name: string | null
          customer_phone: string | null
          id: number | null
          notes: string | null
          order_date: string | null
          order_id: string | null
          payment_date: string | null
          payment_gateway: string | null
          payment_gateway_customer_id: string | null
          payment_method: string | null
          payment_method_id: string | null
          payment_status: string | null
          shipping_address_city: string | null
          shipping_address_country: string | null
          shipping_address_line_1: string | null
          shipping_address_line_2: string | null
          shipping_address_postal_code: string | null
          shipping_address_state: string | null
          shipping_carrier: string | null
          shipping_previous_status: string | null
          shipping_service: string | null
          shipping_status: string | null
          shipping_status_last_updated: string | null
          shipping_status_last_updated_pst: string | null
          shipping_tracking_number: string | null
          skus: string | null
          status: string | null
          total_amount: number | null
          total_discount_amount: number | null
          total_original_amount: number | null
          transaction_id: string | null
          updated_at: string | null
          wallet_type: string | null
        }
        Insert: {
          billing_address_city?: string | null
          billing_address_country?: string | null
          billing_address_line_1?: string | null
          billing_address_line_2?: string | null
          billing_address_postal_code?: string | null
          billing_address_state?: string | null
          billing_customer_name?: string | null
          card_amount?: number | null
          card_brand?: string | null
          card_fingerprint?: string | null
          card_funding?: string | null
          created_at?: string | null
          created_at_pst?: string | null
          currency?: string | null
          customer_email?: string | null
          customer_id?: number | null
          customer_name?: string | null
          customer_phone?: string | null
          id?: number | null
          notes?: string | null
          order_date?: string | null
          order_id?: string | null
          payment_date?: string | null
          payment_gateway?: string | null
          payment_gateway_customer_id?: string | null
          payment_method?: string | null
          payment_method_id?: string | null
          payment_status?: string | null
          shipping_address_city?: string | null
          shipping_address_country?: string | null
          shipping_address_line_1?: string | null
          shipping_address_line_2?: string | null
          shipping_address_postal_code?: string | null
          shipping_address_state?: string | null
          shipping_carrier?: string | null
          shipping_previous_status?: string | null
          shipping_service?: string | null
          shipping_status?: string | null
          shipping_status_last_updated?: string | null
          shipping_status_last_updated_pst?: string | null
          shipping_tracking_number?: string | null
          skus?: string | null
          status?: string | null
          total_amount?: number | null
          total_discount_amount?: number | null
          total_original_amount?: number | null
          transaction_id?: string | null
          updated_at?: string | null
          wallet_type?: string | null
        }
        Update: {
          billing_address_city?: string | null
          billing_address_country?: string | null
          billing_address_line_1?: string | null
          billing_address_line_2?: string | null
          billing_address_postal_code?: string | null
          billing_address_state?: string | null
          billing_customer_name?: string | null
          card_amount?: number | null
          card_brand?: string | null
          card_fingerprint?: string | null
          card_funding?: string | null
          created_at?: string | null
          created_at_pst?: string | null
          currency?: string | null
          customer_email?: string | null
          customer_id?: number | null
          customer_name?: string | null
          customer_phone?: string | null
          id?: number | null
          notes?: string | null
          order_date?: string | null
          order_id?: string | null
          payment_date?: string | null
          payment_gateway?: string | null
          payment_gateway_customer_id?: string | null
          payment_method?: string | null
          payment_method_id?: string | null
          payment_status?: string | null
          shipping_address_city?: string | null
          shipping_address_country?: string | null
          shipping_address_line_1?: string | null
          shipping_address_line_2?: string | null
          shipping_address_postal_code?: string | null
          shipping_address_state?: string | null
          shipping_carrier?: string | null
          shipping_previous_status?: string | null
          shipping_service?: string | null
          shipping_status?: string | null
          shipping_status_last_updated?: string | null
          shipping_status_last_updated_pst?: string | null
          shipping_tracking_number?: string | null
          skus?: string | null
          status?: string | null
          total_amount?: number | null
          total_discount_amount?: number | null
          total_original_amount?: number | null
          transaction_id?: string | null
          updated_at?: string | null
          wallet_type?: string | null
        }
        Relationships: []
      }
      _Orders_backup_20241010: {
        Row: {
          billing_address_city: string | null
          billing_address_country: string | null
          billing_address_line_1: string | null
          billing_address_line_2: string | null
          billing_address_postal_code: string | null
          billing_address_state: string | null
          billing_customer_name: string | null
          card_amount: number | null
          card_brand: string | null
          card_exp_month: string | null
          card_exp_year: string | null
          card_fingerprint: string | null
          card_funding: string | null
          card_last_four: string | null
          created_at: string | null
          created_at_pst: string | null
          currency: string | null
          customer_email: string | null
          customer_id: number | null
          customer_name: string | null
          customer_phone: string | null
          id: number | null
          notes: string | null
          order_date: string | null
          order_id: string | null
          payment_date: string | null
          payment_gateway: string | null
          payment_gateway_customer_id: string | null
          payment_method: string | null
          payment_method_id: string | null
          payment_status: string | null
          shipping_address_city: string | null
          shipping_address_country: string | null
          shipping_address_line_1: string | null
          shipping_address_line_2: string | null
          shipping_address_postal_code: string | null
          shipping_address_state: string | null
          shipping_carrier: string | null
          shipping_previous_status: string | null
          shipping_service: string | null
          shipping_status: string | null
          shipping_status_last_updated: string | null
          shipping_status_last_updated_pst: string | null
          shipping_tracking_number: string | null
          skus: string | null
          status: string | null
          total_amount: number | null
          total_discount_amount: number | null
          total_original_amount: number | null
          total_tax: number | null
          transaction_id: string | null
          updated_at: string | null
          wallet_type: string | null
        }
        Insert: {
          billing_address_city?: string | null
          billing_address_country?: string | null
          billing_address_line_1?: string | null
          billing_address_line_2?: string | null
          billing_address_postal_code?: string | null
          billing_address_state?: string | null
          billing_customer_name?: string | null
          card_amount?: number | null
          card_brand?: string | null
          card_exp_month?: string | null
          card_exp_year?: string | null
          card_fingerprint?: string | null
          card_funding?: string | null
          card_last_four?: string | null
          created_at?: string | null
          created_at_pst?: string | null
          currency?: string | null
          customer_email?: string | null
          customer_id?: number | null
          customer_name?: string | null
          customer_phone?: string | null
          id?: number | null
          notes?: string | null
          order_date?: string | null
          order_id?: string | null
          payment_date?: string | null
          payment_gateway?: string | null
          payment_gateway_customer_id?: string | null
          payment_method?: string | null
          payment_method_id?: string | null
          payment_status?: string | null
          shipping_address_city?: string | null
          shipping_address_country?: string | null
          shipping_address_line_1?: string | null
          shipping_address_line_2?: string | null
          shipping_address_postal_code?: string | null
          shipping_address_state?: string | null
          shipping_carrier?: string | null
          shipping_previous_status?: string | null
          shipping_service?: string | null
          shipping_status?: string | null
          shipping_status_last_updated?: string | null
          shipping_status_last_updated_pst?: string | null
          shipping_tracking_number?: string | null
          skus?: string | null
          status?: string | null
          total_amount?: number | null
          total_discount_amount?: number | null
          total_original_amount?: number | null
          total_tax?: number | null
          transaction_id?: string | null
          updated_at?: string | null
          wallet_type?: string | null
        }
        Update: {
          billing_address_city?: string | null
          billing_address_country?: string | null
          billing_address_line_1?: string | null
          billing_address_line_2?: string | null
          billing_address_postal_code?: string | null
          billing_address_state?: string | null
          billing_customer_name?: string | null
          card_amount?: number | null
          card_brand?: string | null
          card_exp_month?: string | null
          card_exp_year?: string | null
          card_fingerprint?: string | null
          card_funding?: string | null
          card_last_four?: string | null
          created_at?: string | null
          created_at_pst?: string | null
          currency?: string | null
          customer_email?: string | null
          customer_id?: number | null
          customer_name?: string | null
          customer_phone?: string | null
          id?: number | null
          notes?: string | null
          order_date?: string | null
          order_id?: string | null
          payment_date?: string | null
          payment_gateway?: string | null
          payment_gateway_customer_id?: string | null
          payment_method?: string | null
          payment_method_id?: string | null
          payment_status?: string | null
          shipping_address_city?: string | null
          shipping_address_country?: string | null
          shipping_address_line_1?: string | null
          shipping_address_line_2?: string | null
          shipping_address_postal_code?: string | null
          shipping_address_state?: string | null
          shipping_carrier?: string | null
          shipping_previous_status?: string | null
          shipping_service?: string | null
          shipping_status?: string | null
          shipping_status_last_updated?: string | null
          shipping_status_last_updated_pst?: string | null
          shipping_tracking_number?: string | null
          skus?: string | null
          status?: string | null
          total_amount?: number | null
          total_discount_amount?: number | null
          total_original_amount?: number | null
          total_tax?: number | null
          transaction_id?: string | null
          updated_at?: string | null
          wallet_type?: string | null
        }
        Relationships: []
      }
      _Orders_TEST: {
        Row: {
          billing_address_city: string | null
          billing_address_country: string | null
          billing_address_line_1: string | null
          billing_address_line_2: string | null
          billing_address_postal_code: string | null
          billing_address_state: string | null
          billing_customer_name: string | null
          card_amount: number | null
          card_brand: string | null
          card_exp_month: string | null
          card_exp_year: string | null
          card_fingerprint: string | null
          card_funding: string | null
          card_last_four: string | null
          created_at: string | null
          created_at_pst: string | null
          currency: string | null
          customer_email: string | null
          customer_id: number | null
          customer_name: string | null
          customer_phone: string | null
          id: number
          notes: string | null
          order_date: string | null
          order_id: string | null
          payment_date: string | null
          payment_gateway: string | null
          payment_gateway_customer_id: string | null
          payment_method: string | null
          payment_method_id: string | null
          payment_status: string | null
          review_invitation_last_attempt: string | null
          review_invitation_status: string | null
          ship_by_date: string | null
          shipping_address_city: string | null
          shipping_address_country: string | null
          shipping_address_line_1: string | null
          shipping_address_line_2: string | null
          shipping_address_postal_code: string | null
          shipping_address_state: string | null
          shipping_carrier: string | null
          shipping_confirmation_email_sent: boolean | null
          shipping_confirmation_email_sent_by: string | null
          shipping_confirmation_email_sent_date: string | null
          shipping_previous_status: string | null
          shipping_service: string | null
          shipping_status: string | null
          shipping_status_last_updated: string | null
          shipping_status_last_updated_pst: string | null
          shipping_tracking_number: string | null
          skus: string | null
          status: string | null
          total_amount: number | null
          total_discount_amount: number | null
          total_original_amount: number | null
          total_tax: number | null
          transaction_id: string | null
          updated_at: string | null
          wallet_type: string | null
        }
        Insert: {
          billing_address_city?: string | null
          billing_address_country?: string | null
          billing_address_line_1?: string | null
          billing_address_line_2?: string | null
          billing_address_postal_code?: string | null
          billing_address_state?: string | null
          billing_customer_name?: string | null
          card_amount?: number | null
          card_brand?: string | null
          card_exp_month?: string | null
          card_exp_year?: string | null
          card_fingerprint?: string | null
          card_funding?: string | null
          card_last_four?: string | null
          created_at?: string | null
          created_at_pst?: string | null
          currency?: string | null
          customer_email?: string | null
          customer_id?: number | null
          customer_name?: string | null
          customer_phone?: string | null
          id?: number
          notes?: string | null
          order_date?: string | null
          order_id?: string | null
          payment_date?: string | null
          payment_gateway?: string | null
          payment_gateway_customer_id?: string | null
          payment_method?: string | null
          payment_method_id?: string | null
          payment_status?: string | null
          review_invitation_last_attempt?: string | null
          review_invitation_status?: string | null
          ship_by_date?: string | null
          shipping_address_city?: string | null
          shipping_address_country?: string | null
          shipping_address_line_1?: string | null
          shipping_address_line_2?: string | null
          shipping_address_postal_code?: string | null
          shipping_address_state?: string | null
          shipping_carrier?: string | null
          shipping_confirmation_email_sent?: boolean | null
          shipping_confirmation_email_sent_by?: string | null
          shipping_confirmation_email_sent_date?: string | null
          shipping_previous_status?: string | null
          shipping_service?: string | null
          shipping_status?: string | null
          shipping_status_last_updated?: string | null
          shipping_status_last_updated_pst?: string | null
          shipping_tracking_number?: string | null
          skus?: string | null
          status?: string | null
          total_amount?: number | null
          total_discount_amount?: number | null
          total_original_amount?: number | null
          total_tax?: number | null
          transaction_id?: string | null
          updated_at?: string | null
          wallet_type?: string | null
        }
        Update: {
          billing_address_city?: string | null
          billing_address_country?: string | null
          billing_address_line_1?: string | null
          billing_address_line_2?: string | null
          billing_address_postal_code?: string | null
          billing_address_state?: string | null
          billing_customer_name?: string | null
          card_amount?: number | null
          card_brand?: string | null
          card_exp_month?: string | null
          card_exp_year?: string | null
          card_fingerprint?: string | null
          card_funding?: string | null
          card_last_four?: string | null
          created_at?: string | null
          created_at_pst?: string | null
          currency?: string | null
          customer_email?: string | null
          customer_id?: number | null
          customer_name?: string | null
          customer_phone?: string | null
          id?: number
          notes?: string | null
          order_date?: string | null
          order_id?: string | null
          payment_date?: string | null
          payment_gateway?: string | null
          payment_gateway_customer_id?: string | null
          payment_method?: string | null
          payment_method_id?: string | null
          payment_status?: string | null
          review_invitation_last_attempt?: string | null
          review_invitation_status?: string | null
          ship_by_date?: string | null
          shipping_address_city?: string | null
          shipping_address_country?: string | null
          shipping_address_line_1?: string | null
          shipping_address_line_2?: string | null
          shipping_address_postal_code?: string | null
          shipping_address_state?: string | null
          shipping_carrier?: string | null
          shipping_confirmation_email_sent?: boolean | null
          shipping_confirmation_email_sent_by?: string | null
          shipping_confirmation_email_sent_date?: string | null
          shipping_previous_status?: string | null
          shipping_service?: string | null
          shipping_status?: string | null
          shipping_status_last_updated?: string | null
          shipping_status_last_updated_pst?: string | null
          shipping_tracking_number?: string | null
          skus?: string | null
          status?: string | null
          total_amount?: number | null
          total_discount_amount?: number | null
          total_original_amount?: number | null
          total_tax?: number | null
          transaction_id?: string | null
          updated_at?: string | null
          wallet_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "_Orders_TEST_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      Accessories: {
        Row: {
          description: string[] | null
          id: number
          images: string | null
          msrp: number | null
          sku: string | null
          title: string | null
        }
        Insert: {
          description?: string[] | null
          id: number
          images?: string | null
          msrp?: number | null
          sku?: string | null
          title?: string | null
        }
        Update: {
          description?: string[] | null
          id?: number
          images?: string | null
          msrp?: number | null
          sku?: string | null
          title?: string | null
        }
        Relationships: []
      }
      Blogs: {
        Row: {
          created_at: string
          description: string | null
          id: number
          image_path: string | null
          Name: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          image_path?: string | null
          Name?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          image_path?: string | null
          Name?: string | null
        }
        Relationships: []
      }
      car_cover_20241206: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          item_status: string | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          item_status?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          item_status?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      car_web_15_20241217: {
        Row: {
          make: string | null
          model: string | null
          submodel1: string | null
          year_generation: string | null
        }
        Insert: {
          make?: string | null
          model?: string | null
          submodel1?: string | null
          year_generation?: string | null
        }
        Update: {
          make?: string | null
          model?: string | null
          submodel1?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      completed_orders_deleted_items_20241126: {
        Row: {
          billing_address_city: string | null
          billing_address_country: string | null
          billing_address_line_1: string | null
          billing_address_line_2: string | null
          billing_address_postal_code: string | null
          billing_address_state: string | null
          billing_customer_name: string | null
          card_amount: number | null
          card_brand: string | null
          card_exp_month: string | null
          card_exp_year: string | null
          card_fingerprint: string | null
          card_funding: string | null
          card_last_four: string | null
          created_at: string | null
          created_at_pst: string | null
          currency: string | null
          customer_email: string | null
          customer_id: number | null
          customer_name: string | null
          customer_phone: string | null
          discount_amount: number | null
          estimated_delivery_date: string | null
          id: number | null
          mpn: string | null
          notes: string | null
          order_date: string | null
          order_id: string | null
          order_total_amount: number | null
          original_price: number | null
          payment_date: string | null
          payment_gateway: string | null
          payment_gateway_customer_id: string | null
          payment_method: string | null
          payment_method_id: string | null
          payment_status: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_ship_date: string | null
          preorder_true: boolean | null
          price: number | null
          product_id: number | null
          quantity: number | null
          shipping_address_city: string | null
          shipping_address_country: string | null
          shipping_address_line_1: string | null
          shipping_address_line_2: string | null
          shipping_address_postal_code: string | null
          shipping_address_state: string | null
          shipping_carrier: string | null
          shipping_confirmation_email_sent: boolean | null
          shipping_confirmation_email_sent_by: string | null
          shipping_confirmation_email_sent_date: string | null
          shipping_previous_status: string | null
          shipping_service: string | null
          shipping_status: string | null
          shipping_status_last_updated: string | null
          shipping_status_last_updated_pst: string | null
          shipping_tracking_number: string | null
          sku: string | null
          skulabs_sku: string | null
          skus: string | null
          status: string | null
          tax_amount: number | null
          total_discount_amount: number | null
          total_original_amount: number | null
          total_tax: number | null
          transaction_id: string | null
          updated_at: string | null
          wallet_type: string | null
        }
        Insert: {
          billing_address_city?: string | null
          billing_address_country?: string | null
          billing_address_line_1?: string | null
          billing_address_line_2?: string | null
          billing_address_postal_code?: string | null
          billing_address_state?: string | null
          billing_customer_name?: string | null
          card_amount?: number | null
          card_brand?: string | null
          card_exp_month?: string | null
          card_exp_year?: string | null
          card_fingerprint?: string | null
          card_funding?: string | null
          card_last_four?: string | null
          created_at?: string | null
          created_at_pst?: string | null
          currency?: string | null
          customer_email?: string | null
          customer_id?: number | null
          customer_name?: string | null
          customer_phone?: string | null
          discount_amount?: number | null
          estimated_delivery_date?: string | null
          id?: number | null
          mpn?: string | null
          notes?: string | null
          order_date?: string | null
          order_id?: string | null
          order_total_amount?: number | null
          original_price?: number | null
          payment_date?: string | null
          payment_gateway?: string | null
          payment_gateway_customer_id?: string | null
          payment_method?: string | null
          payment_method_id?: string | null
          payment_status?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_ship_date?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          shipping_address_city?: string | null
          shipping_address_country?: string | null
          shipping_address_line_1?: string | null
          shipping_address_line_2?: string | null
          shipping_address_postal_code?: string | null
          shipping_address_state?: string | null
          shipping_carrier?: string | null
          shipping_confirmation_email_sent?: boolean | null
          shipping_confirmation_email_sent_by?: string | null
          shipping_confirmation_email_sent_date?: string | null
          shipping_previous_status?: string | null
          shipping_service?: string | null
          shipping_status?: string | null
          shipping_status_last_updated?: string | null
          shipping_status_last_updated_pst?: string | null
          shipping_tracking_number?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          skus?: string | null
          status?: string | null
          tax_amount?: number | null
          total_discount_amount?: number | null
          total_original_amount?: number | null
          total_tax?: number | null
          transaction_id?: string | null
          updated_at?: string | null
          wallet_type?: string | null
        }
        Update: {
          billing_address_city?: string | null
          billing_address_country?: string | null
          billing_address_line_1?: string | null
          billing_address_line_2?: string | null
          billing_address_postal_code?: string | null
          billing_address_state?: string | null
          billing_customer_name?: string | null
          card_amount?: number | null
          card_brand?: string | null
          card_exp_month?: string | null
          card_exp_year?: string | null
          card_fingerprint?: string | null
          card_funding?: string | null
          card_last_four?: string | null
          created_at?: string | null
          created_at_pst?: string | null
          currency?: string | null
          customer_email?: string | null
          customer_id?: number | null
          customer_name?: string | null
          customer_phone?: string | null
          discount_amount?: number | null
          estimated_delivery_date?: string | null
          id?: number | null
          mpn?: string | null
          notes?: string | null
          order_date?: string | null
          order_id?: string | null
          order_total_amount?: number | null
          original_price?: number | null
          payment_date?: string | null
          payment_gateway?: string | null
          payment_gateway_customer_id?: string | null
          payment_method?: string | null
          payment_method_id?: string | null
          payment_status?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_ship_date?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          shipping_address_city?: string | null
          shipping_address_country?: string | null
          shipping_address_line_1?: string | null
          shipping_address_line_2?: string | null
          shipping_address_postal_code?: string | null
          shipping_address_state?: string | null
          shipping_carrier?: string | null
          shipping_confirmation_email_sent?: boolean | null
          shipping_confirmation_email_sent_by?: string | null
          shipping_confirmation_email_sent_date?: string | null
          shipping_previous_status?: string | null
          shipping_service?: string | null
          shipping_status?: string | null
          shipping_status_last_updated?: string | null
          shipping_status_last_updated_pst?: string | null
          shipping_tracking_number?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          skus?: string | null
          status?: string | null
          tax_amount?: number | null
          total_discount_amount?: number | null
          total_original_amount?: number | null
          total_tax?: number | null
          transaction_id?: string | null
          updated_at?: string | null
          wallet_type?: string | null
        }
        Relationships: []
      }
      conflict_20241129_seat_camaro_mercedes: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      conflicts_20241129_camaro: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      floor_mat_20241105: {
        Row: {
          banner: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: number | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      floor_mat_20241111: {
        Row: {
          banner: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: string | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          row_option: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          row_option?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          row_option?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      floor_mat_20241113: {
        Row: {
          banner: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: number | null
          row_option: string | null
          seat_count: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          row_option?: string | null
          seat_count?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          row_option?: string | null
          seat_count?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      floor_mat_20241115: {
        Row: {
          banner: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: number | null
          row_option: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          row_option?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          row_option?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      floor_mat_20241206: {
        Row: {
          banner: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: number | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      floor_mat_20241210: {
        Row: {
          banner: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: number | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      floor_mat_20241210_duplicate_2: {
        Row: {
          banner: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      floor_mat_duplicate_fix_20241210: {
        Row: {
          banner: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: number | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: number | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      floor_mat_reviews_20241010: {
        Row: {
          Review: string | null
          Status: string | null
          Title: string | null
        }
        Insert: {
          Review?: string | null
          Status?: string | null
          Title?: string | null
        }
        Update: {
          Review?: string | null
          Status?: string | null
          Title?: string | null
        }
        Relationships: []
      }
      floor_mat_reviews_20241018: {
        Row: {
          customer_name: string | null
          date: string | null
          helpful: number | null
          helpful_tier: string | null
          image_link: string | null
          rating: number | null
          recommend: string | null
          review_description: string | null
          review_title: string | null
          type: string | null
          verfied_status: string | null
        }
        Insert: {
          customer_name?: string | null
          date?: string | null
          helpful?: number | null
          helpful_tier?: string | null
          image_link?: string | null
          rating?: number | null
          recommend?: string | null
          review_description?: string | null
          review_title?: string | null
          type?: string | null
          verfied_status?: string | null
        }
        Update: {
          customer_name?: string | null
          date?: string | null
          helpful?: number | null
          helpful_tier?: string | null
          image_link?: string | null
          rating?: number | null
          recommend?: string | null
          review_description?: string | null
          review_title?: string | null
          type?: string | null
          verfied_status?: string | null
        }
        Relationships: []
      }
      floor_mat_trunk_20241010: {
        Row: {
          banner: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: number | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      floor_mat_yg_pg_check: {
        Row: {
          make: string | null
          model: string | null
          parent_generation: string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
        }
        Insert: {
          make?: string | null
          model?: string | null
          parent_generation?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Update: {
          make?: string | null
          model?: string | null
          parent_generation?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      hyeon_20240912: {
        Row: {
          display_color: string | null
          display_set: string | null
          id: number
          MPN: string | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          display_color?: string | null
          display_set?: string | null
          id: number
          MPN?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          display_color?: string | null
          display_set?: string | null
          id?: number
          MPN?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      hyeon_20241023_update: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Make: {
        Row: {
          created_at: string
          id: number
          name: string | null
          slug: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          slug?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          slug?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      Model: {
        Row: {
          created_at: string
          id: number
          name: string | null
          slug: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          slug?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          slug?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      new_20240924_front: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      new_20240924_full: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      new_20240924_hyeon: {
        Row: {
          back: string | null
          "Back Only": string | null
          "back seat SKU": string | null
          banner: string | null
          color: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          "f# seat cover": number | null
          feature: string | null
          front: string | null
          "Front Seat SKU": string | null
          "full set SKU": string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          quantity_1: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          back?: string | null
          "Back Only"?: string | null
          "back seat SKU"?: string | null
          banner?: string | null
          color?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          "f# seat cover"?: number | null
          feature?: string | null
          front?: string | null
          "Front Seat SKU"?: string | null
          "full set SKU"?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          quantity_1?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          back?: string | null
          "Back Only"?: string | null
          "back seat SKU"?: string | null
          banner?: string | null
          color?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          "f# seat cover"?: number | null
          feature?: string | null
          front?: string | null
          "Front Seat SKU"?: string | null
          "full set SKU"?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          quantity_1?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      new_20240927_both: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      new_20240927_front: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: number | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      new_20240927_full: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      new_20241003_seats: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      new_20241016_seats: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      new_20241018_seats: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: number | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: number | null
          id: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: number | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      new_and_update_20241017_from_hyeon: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      new_product_20250130: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      new_products_20241010: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: number | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      new_seat_cover_20241028: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      new_size_20240906: {
        Row: {
          id: number
          MPN: string | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id: number
          MPN?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number
          MPN?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      order_id_sequences: {
        Row: {
          date: string
          last_sequence: number | null
          product_type: string
        }
        Insert: {
          date: string
          last_sequence?: number | null
          product_type: string
        }
        Update: {
          date?: string
          last_sequence?: number | null
          product_type?: string
        }
        Relationships: []
      }
      order_items_being_removed_20240816: {
        Row: {
          created_at: string | null
          discount_amount: number | null
          id: number | null
          new_product_id: number | null
          order_id: number | null
          original_price: number | null
          price: number | null
          product_id: number | null
          quantity: number | null
          skus: string | null
        }
        Insert: {
          created_at?: string | null
          discount_amount?: number | null
          id?: number | null
          new_product_id?: number | null
          order_id?: number | null
          original_price?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          skus?: string | null
        }
        Update: {
          created_at?: string | null
          discount_amount?: number | null
          id?: number | null
          new_product_id?: number | null
          order_id?: number | null
          original_price?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          skus?: string | null
        }
        Relationships: []
      }
      order_items_being_removed_20240820: {
        Row: {
          created_at: string | null
          discount_amount: number | null
          id: number | null
          new_product_id: number | null
          order_id: number | null
          original_price: number | null
          price: number | null
          product_id: number | null
          quantity: number | null
          skus: string | null
        }
        Insert: {
          created_at?: string | null
          discount_amount?: number | null
          id?: number | null
          new_product_id?: number | null
          order_id?: number | null
          original_price?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          skus?: string | null
        }
        Update: {
          created_at?: string | null
          discount_amount?: number | null
          id?: number | null
          new_product_id?: number | null
          order_id?: number | null
          original_price?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          skus?: string | null
        }
        Relationships: []
      }
      order_taxes: {
        Row: {
          id: number
          jurisdiction: string
          order_id: number
          tax_amount: number
          tax_rate: number
          tax_type: string
          taxable_amount: number
        }
        Insert: {
          id?: number
          jurisdiction: string
          order_id: number
          tax_amount: number
          tax_rate: number
          tax_type: string
          taxable_amount: number
        }
        Update: {
          id?: number
          jurisdiction?: string
          order_id?: number
          tax_amount?: number
          tax_rate?: number
          tax_type?: string
          taxable_amount?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_taxes_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "_Orders"
            referencedColumns: ["id"]
          },
        ]
      }
      order_taxes_test: {
        Row: {
          id: number
          jurisdiction: string
          order_id: number
          tax_amount: number
          tax_rate: number
          tax_type: string
          taxable_amount: number
        }
        Insert: {
          id?: number
          jurisdiction: string
          order_id: number
          tax_amount: number
          tax_rate: number
          tax_type: string
          taxable_amount: number
        }
        Update: {
          id?: number
          jurisdiction?: string
          order_id?: number
          tax_amount?: number
          tax_rate?: number
          tax_type?: string
          taxable_amount?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_taxes_test_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "_Orders_TEST"
            referencedColumns: ["id"]
          },
        ]
      }
      orderItems_table: {
        Row: {
          created_at: string
          discount_amount: number | null
          estimated_delivery_date: string | null
          id: number
          multiplier: number | null
          order_id: number | null
          original_price: number | null
          preorder_ship_date: string | null
          price: number | null
          product_id: number | null
          quantity: number | null
          tax_amount: number | null
          total_amount: number | null
        }
        Insert: {
          created_at?: string
          discount_amount?: number | null
          estimated_delivery_date?: string | null
          id?: number
          multiplier?: number | null
          order_id?: number | null
          original_price?: number | null
          preorder_ship_date?: string | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          tax_amount?: number | null
          total_amount?: number | null
        }
        Update: {
          created_at?: string
          discount_amount?: number | null
          estimated_delivery_date?: string | null
          id?: number
          multiplier?: number | null
          order_id?: number | null
          original_price?: number | null
          preorder_ship_date?: string | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          tax_amount?: number | null
          total_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "orderItems_table_duplicate_duplicate_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "_Orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orderItems_table_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "Products"
            referencedColumns: ["id"]
          },
        ]
      }
      orderItems_table_20240812_backup: {
        Row: {
          created_at: string | null
          discount_amount: number | null
          id: number | null
          order_id: number | null
          original_price: number | null
          price: number | null
          product_id: number | null
          quantity: number | null
        }
        Insert: {
          created_at?: string | null
          discount_amount?: number | null
          id?: number | null
          order_id?: number | null
          original_price?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
        }
        Update: {
          created_at?: string | null
          discount_amount?: number | null
          id?: number | null
          order_id?: number | null
          original_price?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
        }
        Relationships: []
      }
      orderItems_table_20240815_forIDFix_backup: {
        Row: {
          created_at: string | null
          discount_amount: number | null
          id: number | null
          order_id: number | null
          original_price: number | null
          price: number | null
          product_id: number | null
          quantity: number | null
        }
        Insert: {
          created_at?: string | null
          discount_amount?: number | null
          id?: number | null
          order_id?: number | null
          original_price?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
        }
        Update: {
          created_at?: string | null
          discount_amount?: number | null
          id?: number | null
          order_id?: number | null
          original_price?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
        }
        Relationships: []
      }
      orderItems_table_20240815_forIDFix_NEW: {
        Row: {
          created_at: string | null
          discount_amount: number | null
          id: number | null
          order_id: number | null
          original_price: number | null
          price: number | null
          product_id: number | null
          quantity: number | null
        }
        Insert: {
          created_at?: string | null
          discount_amount?: number | null
          id?: number | null
          order_id?: number | null
          original_price?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
        }
        Update: {
          created_at?: string | null
          discount_amount?: number | null
          id?: number | null
          order_id?: number | null
          original_price?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
        }
        Relationships: []
      }
      orderItems_table_20241227: {
        Row: {
          created_at: string | null
          discount_amount: number | null
          estimated_delivery_date: string | null
          id: number | null
          order_id: number | null
          original_price: number | null
          preorder_ship_date: string | null
          price: number | null
          product_id: number | null
          quantity: number | null
          tax_amount: number | null
          total_amount: number | null
        }
        Insert: {
          created_at?: string | null
          discount_amount?: number | null
          estimated_delivery_date?: string | null
          id?: number | null
          order_id?: number | null
          original_price?: number | null
          preorder_ship_date?: string | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          tax_amount?: number | null
          total_amount?: number | null
        }
        Update: {
          created_at?: string | null
          discount_amount?: number | null
          estimated_delivery_date?: string | null
          id?: number | null
          order_id?: number | null
          original_price?: number | null
          preorder_ship_date?: string | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          tax_amount?: number | null
          total_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "orderItems_table_20241227_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "Products_20241227"
            referencedColumns: ["id"]
          },
        ]
      }
      orderItems_table_backup_20241010: {
        Row: {
          created_at: string | null
          discount_amount: number | null
          id: number | null
          order_id: number | null
          original_price: number | null
          price: number | null
          product_id: number | null
          quantity: number | null
          tax_amount: number | null
          total_amount: number | null
        }
        Insert: {
          created_at?: string | null
          discount_amount?: number | null
          id?: number | null
          order_id?: number | null
          original_price?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          tax_amount?: number | null
          total_amount?: number | null
        }
        Update: {
          created_at?: string | null
          discount_amount?: number | null
          id?: number | null
          order_id?: number | null
          original_price?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          tax_amount?: number | null
          total_amount?: number | null
        }
        Relationships: []
      }
      orderItems_table_TEST: {
        Row: {
          created_at: string | null
          discount_amount: number | null
          estimated_delivery_date: string | null
          id: number | null
          multiplier: number | null
          order_id: number | null
          original_price: number | null
          preorder_ship_date: string | null
          price: number | null
          product_id: number | null
          quantity: number | null
          tax_amount: number | null
          total_amount: number | null
        }
        Insert: {
          created_at?: string | null
          discount_amount?: number | null
          estimated_delivery_date?: string | null
          id?: number | null
          multiplier?: number | null
          order_id?: number | null
          original_price?: number | null
          preorder_ship_date?: string | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          tax_amount?: number | null
          total_amount?: number | null
        }
        Update: {
          created_at?: string | null
          discount_amount?: number | null
          estimated_delivery_date?: string | null
          id?: number | null
          multiplier?: number | null
          order_id?: number | null
          original_price?: number | null
          preorder_ship_date?: string | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          tax_amount?: number | null
          total_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "orderItems_table_TEST_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "_Orders_TEST"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orderItems_table_TEST_product_id_fkey1"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "Products"
            referencedColumns: ["id"]
          },
        ]
      }
      orderItems_table_TEST_20240815_forIDFix_NEW: {
        Row: {
          created_at: string | null
          discount_amount: number | null
          id: number | null
          order_id: number | null
          original_price: number | null
          price: number | null
          product_id: number | null
          quantity: number | null
        }
        Insert: {
          created_at?: string | null
          discount_amount?: number | null
          id?: number | null
          order_id?: number | null
          original_price?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
        }
        Update: {
          created_at?: string | null
          discount_amount?: number | null
          id?: number | null
          order_id?: number | null
          original_price?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
        }
        Relationships: []
      }
      orderItems_table_TEST_duplicate: {
        Row: {
          created_at: string
          discount_amount: number | null
          id: number
          order_id: number | null
          original_price: number | null
          preorder_discount: number | null
          price: number | null
          product_id: number | null
          quantity: number | null
        }
        Insert: {
          created_at?: string
          discount_amount?: number | null
          id?: number
          order_id?: number | null
          original_price?: number | null
          preorder_discount?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
        }
        Update: {
          created_at?: string
          discount_amount?: number | null
          id?: number
          order_id?: number | null
          original_price?: number | null
          preorder_discount?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "orderItems_table_TEST_duplicate_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "_Orders_TEST"
            referencedColumns: ["id"]
          },
        ]
      }
      preorder_20240911: {
        Row: {
          id: number
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id: number
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      preorder_history: {
        Row: {
          _id: number
          date_updated: string | null
          id: number | null
          mpn: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string
          skulabs_sku: string | null
          website_true: string | null
        }
        Insert: {
          _id?: number
          date_updated?: string | null
          id?: number | null
          mpn?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku: string
          skulabs_sku?: string | null
          website_true?: string | null
        }
        Update: {
          _id?: number
          date_updated?: string | null
          id?: number | null
          mpn?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string
          skulabs_sku?: string | null
          website_true?: string | null
        }
        Relationships: []
      }
      preorder_history_condensed_2024: {
        Row: {
          date_updated: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          skulabs_sku: string | null
          website_true: string | null
        }
        Insert: {
          date_updated?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          skulabs_sku?: string | null
          website_true?: string | null
        }
        Update: {
          date_updated?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          skulabs_sku?: string | null
          website_true?: string | null
        }
        Relationships: []
      }
      preorder_history_test: {
        Row: {
          _id: number
          date_updated: string | null
          id: number | null
          mpn: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          skulabs_sku: string | null
          website_true: string | null
        }
        Insert: {
          _id?: number
          date_updated?: string | null
          id?: number | null
          mpn?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          skulabs_sku?: string | null
          website_true?: string | null
        }
        Update: {
          _id?: number
          date_updated?: string | null
          id?: number | null
          mpn?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          skulabs_sku?: string | null
          website_true?: string | null
        }
        Relationships: []
      }
      preorder_update_20240910: {
        Row: {
          id: number
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id: number
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      product_new_sku_20240905: {
        Row: {
          display_color: string | null
          display_id: string | null
          display_set: string | null
          gtin: string | null
          id: number | null
          make: string | null
          model: string | null
          MPN: string | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
        }
        Insert: {
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Update: {
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      "Product-Metadata": {
        Row: {
          description: string | null
          id: string | null
          URL: string | null
        }
        Insert: {
          description?: string | null
          id?: string | null
          URL?: string | null
        }
        Update: {
          description?: string | null
          id?: string | null
          URL?: string | null
        }
        Relationships: []
      }
      Products: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20240103_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20240110: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20240617: {
        Row: {
          display_color: string | null
          display_id: string | null
          display_set: string | null
          id: number
          make: string | null
          model: string | null
          parent_generation: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
        }
        Insert: {
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          id: number
          make?: string | null
          model?: string | null
          parent_generation?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Update: {
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          id?: number
          make?: string | null
          model?: string | null
          parent_generation?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      Products_20240828_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20240828_new: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20240828_old: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      products_20240906_new_br: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20240924_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241010_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241016: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241016_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241018: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241018_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241025_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241029_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241115: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          row_option: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          row_option?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          row_option?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241115_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241120_Test: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241125_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241202_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241206_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241206_old: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241210: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241210_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241217_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241220_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241223_floor: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241224: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241224_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241227: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20241227_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20250103_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20250103_floormats: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20250211: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20250211_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20250212_backup: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_20250212_old: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          mpn: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          mpn?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_backup_20240730: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          msrp: number | null
          parent_generation: string | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs SKU": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          id: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs SKU"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      Products_Floor_Mat_20241010: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_option: string | null
          feature: string | null
          gtin: string | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: number | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_option?: string | null
          feature?: string | null
          gtin?: string | null
          id: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_option?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      relations_product: {
        Row: {
          created_at: string | null
          id: number
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "relations_product_20250212_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "Make"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20250212_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "Model"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20250212_product_id_fkey_2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "Products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20250212_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "Type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20250212_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "Years"
            referencedColumns: ["id"]
          },
        ]
      }
      relations_product_20240923: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      relations_product_20240927: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      relations_product_20241010: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "relations_product_20241010_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "Make"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241010_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "Model"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241010_product_id_fkey_2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "new_products_20241010"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241010_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "Type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241010_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "Years"
            referencedColumns: ["id"]
          },
        ]
      }
      relations_product_20241016: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "relations_product_20241016_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "Make"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241016_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "Model"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241016_product_id_fkey_2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "new_20241016_seats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241016_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "Type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241016_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "Years"
            referencedColumns: ["id"]
          },
        ]
      }
      relations_product_20241017: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "relations_product_20241017_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "Make"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241017_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "Model"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241017_product_id_fkey_2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "floor_mat_trunk_20241010"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241017_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "Type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241017_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "Years"
            referencedColumns: ["id"]
          },
        ]
      }
      relations_product_20241018: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "relations_product_20241018_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "Make"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241018_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "Model"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241018_product_id_fkey_2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "new_20241018_seats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241018_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "Type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241018_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "Years"
            referencedColumns: ["id"]
          },
        ]
      }
      relations_product_20241029: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "relations_product_20241029_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "Make"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241029_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "Model"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241029_product_id_fkey_2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "new_seat_cover_20241028"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241029_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "Type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241029_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "Years"
            referencedColumns: ["id"]
          },
        ]
      }
      relations_product_20241115: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "relations_product_20241115_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "Make"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241115_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "Model"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241115_product_id_fkey_2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "Products_20241115"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241115_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "Type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241115_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "Years"
            referencedColumns: ["id"]
          },
        ]
      }
      relations_product_20241125_backup: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      relations_product_20241206_backup: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      relations_product_20241210: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      relations_product_20241210_backup: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      relations_product_20241223_floormat: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      relations_product_20241224: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      relations_product_20241224_camo: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      relations_product_20241227: {
        Row: {
          created_at: string | null
          id: number
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "relations_product_20241227_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "Make"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241227_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "Model"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241227_product_id_fkey_2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "Products_20241227"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241227_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "Type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241227_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "Years"
            referencedColumns: ["id"]
          },
        ]
      }
      relations_product_20241227_backup: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      relations_product_20250103_backup: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      relations_product_20250103_floormats: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      relations_product_20250130: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      relations_product_20250211: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      relations_product_20250212_old: {
        Row: {
          created_at: string | null
          id: number
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "relations_product_20241206_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "Make"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241206_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "Model"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241206_product_id_fkey_2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "Products_20250212_old"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241206_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "Type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_20241206_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "Years"
            referencedColumns: ["id"]
          },
        ]
      }
      relations_product_floor_mat_20241010: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      relations_product_floor_mat_20241218: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      relations_product_go_test: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "relations_product_go_test_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "Make"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_go_test_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "Model"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_go_test_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "Products_20241206_old"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_go_test_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "Type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relations_product_go_test_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "Years"
            referencedColumns: ["id"]
          },
        ]
      }
      relations_product_new_br_20240809: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      remove_20241125: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      reviews_car_covers: {
        Row: {
          gpt_review_id: string | null
          helpful: number | null
          id: number | null
          make: string | null
          make_slug: string | null
          Mirror: string | null
          model: string | null
          model_slug: string | null
          parent_generation: string | null
          product_name: string | null
          product_type: string | null
          rating_stars: number | null
          recommend: string | null
          review_author: string | null
          review_description: string | null
          review_image: string | null
          review_title: string | null
          reviewed_at: string | null
          Size: string | null
          sku: string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          verified_status: string | null
          year_generation: string | null
        }
        Insert: {
          gpt_review_id?: string | null
          helpful?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          Mirror?: string | null
          model?: string | null
          model_slug?: string | null
          parent_generation?: string | null
          product_name?: string | null
          product_type?: string | null
          rating_stars?: number | null
          recommend?: string | null
          review_author?: string | null
          review_description?: string | null
          review_image?: string | null
          review_title?: string | null
          reviewed_at?: string | null
          Size?: string | null
          sku?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          verified_status?: string | null
          year_generation?: string | null
        }
        Update: {
          gpt_review_id?: string | null
          helpful?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          Mirror?: string | null
          model?: string | null
          model_slug?: string | null
          parent_generation?: string | null
          product_name?: string | null
          product_type?: string | null
          rating_stars?: number | null
          recommend?: string | null
          review_author?: string | null
          review_description?: string | null
          review_image?: string | null
          review_title?: string | null
          reviewed_at?: string | null
          Size?: string | null
          sku?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          verified_status?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      reviews_floor_mats: {
        Row: {
          gpt_review_id: string | null
          helpful: number | null
          id: number | null
          make: string | null
          make_slug: string | null
          Mirror: string | null
          model: string | null
          model_slug: string | null
          parent_generation: string | null
          product_name: string | null
          product_type: string | null
          rating_stars: number | null
          recommend: string | null
          review_author: string | null
          review_description: string | null
          review_image: string | null
          review_title: string | null
          reviewed_at: string | null
          Size: string | null
          sku: string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          verified_status: string | null
          year_generation: string | null
        }
        Insert: {
          gpt_review_id?: string | null
          helpful?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          Mirror?: string | null
          model?: string | null
          model_slug?: string | null
          parent_generation?: string | null
          product_name?: string | null
          product_type?: string | null
          rating_stars?: number | null
          recommend?: string | null
          review_author?: string | null
          review_description?: string | null
          review_image?: string | null
          review_title?: string | null
          reviewed_at?: string | null
          Size?: string | null
          sku?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          verified_status?: string | null
          year_generation?: string | null
        }
        Update: {
          gpt_review_id?: string | null
          helpful?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          Mirror?: string | null
          model?: string | null
          model_slug?: string | null
          parent_generation?: string | null
          product_name?: string | null
          product_type?: string | null
          rating_stars?: number | null
          recommend?: string | null
          review_author?: string | null
          review_description?: string | null
          review_image?: string | null
          review_title?: string | null
          reviewed_at?: string | null
          Size?: string | null
          sku?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          verified_status?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      reviews_floor_mats_20241018_old: {
        Row: {
          gpt_review_id: string | null
          helpful: number | null
          id: number | null
          make: string | null
          make_slug: string | null
          Mirror: string | null
          model: string | null
          model_slug: string | null
          parent_generation: string | null
          product_name: string | null
          product_type: string | null
          rating_stars: number | null
          recommend: string | null
          review_author: string | null
          review_description: string | null
          review_image: string | null
          review_title: string | null
          reviewed_at: string | null
          Size: string | null
          sku: string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          verified_status: string | null
          year_generation: string | null
        }
        Insert: {
          gpt_review_id?: string | null
          helpful?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          Mirror?: string | null
          model?: string | null
          model_slug?: string | null
          parent_generation?: string | null
          product_name?: string | null
          product_type?: string | null
          rating_stars?: number | null
          recommend?: string | null
          review_author?: string | null
          review_description?: string | null
          review_image?: string | null
          review_title?: string | null
          reviewed_at?: string | null
          Size?: string | null
          sku?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          verified_status?: string | null
          year_generation?: string | null
        }
        Update: {
          gpt_review_id?: string | null
          helpful?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          Mirror?: string | null
          model?: string | null
          model_slug?: string | null
          parent_generation?: string | null
          product_name?: string | null
          product_type?: string | null
          rating_stars?: number | null
          recommend?: string | null
          review_author?: string | null
          review_description?: string | null
          review_image?: string | null
          review_title?: string | null
          reviewed_at?: string | null
          Size?: string | null
          sku?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          verified_status?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      reviews_seat_covers: {
        Row: {
          gpt_review_id: string | null
          helpful: number | null
          id: number
          make: string | null
          make_slug: string | null
          Mirror: string | null
          model: string | null
          model_slug: string | null
          parent_generation: string | null
          product_name: string | null
          product_type: string | null
          rating_stars: number | null
          recommend: string | null
          review_author: string | null
          review_description: string | null
          review_image: string | null
          review_title: string | null
          reviewed_at: string | null
          Size: string | null
          sku: string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          verified_status: string | null
          year_generation: string | null
        }
        Insert: {
          gpt_review_id?: string | null
          helpful?: number | null
          id?: number
          make?: string | null
          make_slug?: string | null
          Mirror?: string | null
          model?: string | null
          model_slug?: string | null
          parent_generation?: string | null
          product_name?: string | null
          product_type?: string | null
          rating_stars?: number | null
          recommend?: string | null
          review_author?: string | null
          review_description?: string | null
          review_image?: string | null
          review_title?: string | null
          reviewed_at?: string | null
          Size?: string | null
          sku?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          verified_status?: string | null
          year_generation?: string | null
        }
        Update: {
          gpt_review_id?: string | null
          helpful?: number | null
          id?: number
          make?: string | null
          make_slug?: string | null
          Mirror?: string | null
          model?: string | null
          model_slug?: string | null
          parent_generation?: string | null
          product_name?: string | null
          product_type?: string | null
          rating_stars?: number | null
          recommend?: string | null
          review_author?: string | null
          review_description?: string | null
          review_image?: string | null
          review_title?: string | null
          reviewed_at?: string | null
          Size?: string | null
          sku?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          verified_status?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      seat_cover_camo_20241224: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      seat_cover_metadata: {
        Row: {
          description: string | null
          "f# seat cover": number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          parent_generation: string | null
          submodel1: string | null
          submodel1_slug: string | null
          submodel2: string | null
          submodel2_slug: string | null
          year_generation: string | null
        }
        Insert: {
          description?: string | null
          "f# seat cover"?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          parent_generation?: string | null
          submodel1?: string | null
          submodel1_slug?: string | null
          submodel2?: string | null
          submodel2_slug?: string | null
          year_generation?: string | null
        }
        Update: {
          description?: string | null
          "f# seat cover"?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          parent_generation?: string | null
          submodel1?: string | null
          submodel1_slug?: string | null
          submodel2?: string | null
          submodel2_slug?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      seat_cover_preorder_front_20240916_ck: {
        Row: {
          id: number
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id: number
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      seat_cover_preorder_full_20240916: {
        Row: {
          id: number
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id: number
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      seat_covers_20241203: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          website_true: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          website_true?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      seat_covers_20241227: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      shopify_car_cover_jinwon_20250108: {
        Row: {
          alt_image_text: string | null
          display_color: string | null
          display_id: string | null
          gtin: string | null
          handle: string | null
          id: number
          ignore: string | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          shipping_profile_associated: string | null
          shipping_profile_associated_last_sync_at: string | null
          shopify_last_synced_at: string | null
          shopify_product_id: string | null
          shopify_product_variant_id: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          variant_barcode: string | null
          variant_compare_to_price: string | null
          variant_price: string | null
          website_true: string | null
          year: string | null
        }
        Insert: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: string | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Update: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: string | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_car_cover_lookup_20241210: {
        Row: {
          alt_image_text: string | null
          display_color: string | null
          display_id: string | null
          gtin: string | null
          handle: string | null
          id: number
          ignore: string | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          shipping_profile_associated: string | null
          shipping_profile_associated_last_sync_at: string | null
          shopify_last_synced_at: string | null
          shopify_product_id: string | null
          shopify_product_variant_id: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          variant_barcode: string | null
          variant_compare_to_price: number | null
          variant_price: number | null
          website_true: string | null
          year: string | null
        }
        Insert: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: number | null
          variant_price?: number | null
          website_true?: string | null
          year?: string | null
        }
        Update: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: number | null
          variant_price?: number | null
          website_true?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_car_cover_product: {
        Row: {
          "1st Variation": string | null
          "2nd Variation": string | null
          Color: string | null
          "Final Handle": string | null
          Gtin: number | null
          Handle: string | null
          ID: number | null
          Main: string | null
          Make: string | null
          Model: string | null
          MSRP: string | null
          "Opiton2 Value": string | null
          "Opiton3 Value": string | null
          "Option1 Name": string | null
          "Option1 Value": string | null
          "Option2 Name": string | null
          "Option3 Name": string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          "Sale Price": string | null
          Size: string | null
          SKU: string | null
          SKULABS: string | null
          Sub: string | null
          Tags: string | null
          Title: string | null
          Type: string | null
          "Variant Weight": number | null
        }
        Insert: {
          "1st Variation"?: string | null
          "2nd Variation"?: string | null
          Color?: string | null
          "Final Handle"?: string | null
          Gtin?: number | null
          Handle?: string | null
          ID?: number | null
          Main?: string | null
          Make?: string | null
          Model?: string | null
          MSRP?: string | null
          "Opiton2 Value"?: string | null
          "Opiton3 Value"?: string | null
          "Option1 Name"?: string | null
          "Option1 Value"?: string | null
          "Option2 Name"?: string | null
          "Option3 Name"?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          "Sale Price"?: string | null
          Size?: string | null
          SKU?: string | null
          SKULABS?: string | null
          Sub?: string | null
          Tags?: string | null
          Title?: string | null
          Type?: string | null
          "Variant Weight"?: number | null
        }
        Update: {
          "1st Variation"?: string | null
          "2nd Variation"?: string | null
          Color?: string | null
          "Final Handle"?: string | null
          Gtin?: number | null
          Handle?: string | null
          ID?: number | null
          Main?: string | null
          Make?: string | null
          Model?: string | null
          MSRP?: string | null
          "Opiton2 Value"?: string | null
          "Opiton3 Value"?: string | null
          "Option1 Name"?: string | null
          "Option1 Value"?: string | null
          "Option2 Name"?: string | null
          "Option3 Name"?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          "Sale Price"?: string | null
          Size?: string | null
          SKU?: string | null
          SKULABS?: string | null
          Sub?: string | null
          Tags?: string | null
          Title?: string | null
          Type?: string | null
          "Variant Weight"?: number | null
        }
        Relationships: []
      }
      shopify_car_handle_picture_update: {
        Row: {
          "Final Handle": string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          SKU: string | null
        }
        Insert: {
          "Final Handle"?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          SKU?: string | null
        }
        Update: {
          "Final Handle"?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          SKU?: string | null
        }
        Relationships: []
      }
      shopify_car_seatbk_jinwon_20250110: {
        Row: {
          alt_image_text: string | null
          display_color: string | null
          display_id: string | null
          gtin: string | null
          handle: string | null
          id: number
          ignore: string | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          shipping_profile_associated: string | null
          shipping_profile_associated_last_sync_at: string | null
          shopify_last_synced_at: string | null
          shopify_product_id: string | null
          shopify_product_variant_id: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          variant_barcode: string | null
          variant_compare_to_price: string | null
          variant_price: string | null
          website_true: string | null
          year: string | null
        }
        Insert: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: string | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Update: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: string | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_dodge_20241224: {
        Row: {
          alt_image_text: string | null
          display_color: string | null
          display_id: string | null
          gtin: string | null
          handle: string | null
          id: number | null
          ignore: string | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          shipping_profile_associated: string | null
          shipping_profile_associated_last_sync_at: string | null
          shopify_last_synced_at: string | null
          shopify_product_id: string | null
          shopify_product_variant_id: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          variant_barcode: string | null
          variant_compare_to_price: string | null
          variant_price: string | null
          website_true: string | null
          year: string | null
        }
        Insert: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number | null
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: string | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Update: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number | null
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: string | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_dodge_ram_seat_20241218: {
        Row: {
          alt_image_text: string | null
          display_color: string | null
          display_id: string | null
          gtin: string | null
          handle: string | null
          id: number | null
          ignore: string | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          shipping_profile_associated: string | null
          shipping_profile_associated_last_sync_at: string | null
          shopify_last_synced_at: string | null
          shopify_product_id: string | null
          shopify_product_variant_id: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          variant_barcode: string | null
          variant_compare_to_price: string | null
          variant_price: string | null
          website_true: string | null
          year: string | null
        }
        Insert: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number | null
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: string | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Update: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number | null
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: string | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_image_alt_text: {
        Row: {
          command: string | null
          handle: string | null
          image_alt_text: string | null
          image_src: string | null
        }
        Insert: {
          command?: string | null
          handle?: string | null
          image_alt_text?: string | null
          image_src?: string | null
        }
        Update: {
          command?: string | null
          handle?: string | null
          image_alt_text?: string | null
          image_src?: string | null
        }
        Relationships: []
      }
      shopify_images_bkrd_car_20250116: {
        Row: {
          ID: number | null
          "Image Src": string | null
        }
        Insert: {
          ID?: number | null
          "Image Src"?: string | null
        }
        Update: {
          ID?: number | null
          "Image Src"?: string | null
        }
        Relationships: []
      }
      shopify_make: {
        Row: {
          created_at: string | null
          id: number
          name: string | null
          slug: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name?: string | null
          slug?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string | null
          slug?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      shopify_model: {
        Row: {
          created_at: string | null
          id: number
          name: string | null
          slug: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name?: string | null
          slug?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string | null
          slug?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      shopify_product_lookup: {
        Row: {
          display_id: string | null
          gtin: number | null
          handle: string | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          year: string | null
        }
        Insert: {
          display_id?: string | null
          gtin?: number | null
          handle?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Update: {
          display_id?: string | null
          gtin?: number | null
          handle?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_product_lookup_20241104: {
        Row: {
          display_id: string | null
          gtin: number | null
          handle: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          year: string | null
        }
        Insert: {
          display_id?: string | null
          gtin?: number | null
          handle?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Update: {
          display_id?: string | null
          gtin?: number | null
          handle?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_product_lookup_20241129: {
        Row: {
          display_color: string | null
          display_id: string | null
          gtin: string | null
          handle: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          year: string | null
        }
        Insert: {
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Update: {
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_product_lookup_20241202: {
        Row: {
          display_color: string | null
          display_id: string | null
          gtin: number | null
          handle: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          year: string | null
        }
        Insert: {
          display_color?: string | null
          display_id?: string | null
          gtin?: number | null
          handle?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Update: {
          display_color?: string | null
          display_id?: string | null
          gtin?: number | null
          handle?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_product_lookup_20241203: {
        Row: {
          display_color: string | null
          display_id: string | null
          gtin: number | null
          handle: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          year: string | null
        }
        Insert: {
          display_color?: string | null
          display_id?: string | null
          gtin?: number | null
          handle?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Update: {
          display_color?: string | null
          display_id?: string | null
          gtin?: number | null
          handle?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_product_lookup_20241205: {
        Row: {
          alt_image_text: string | null
          display_color: string | null
          display_id: string | null
          gtin: string | null
          handle: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          year: string | null
        }
        Insert: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Update: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_product_lookup_20241212: {
        Row: {
          alt_image_text: string | null
          display_color: string | null
          display_id: string | null
          gtin: string | null
          handle: string | null
          id: number
          ignore: string | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          shipping_profile_associated: string | null
          shipping_profile_associated_last_sync_at: string | null
          shopify_last_synced_at: string | null
          shopify_product_id: string | null
          shopify_product_variant_id: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          variant_barcode: string | null
          variant_compare_to_price: number | null
          variant_price: number | null
          website_true: string | null
          year: string | null
        }
        Insert: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: number | null
          variant_price?: number | null
          website_true?: string | null
          year?: string | null
        }
        Update: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: number | null
          variant_price?: number | null
          website_true?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_product_lookup_20250130: {
        Row: {
          alt_image_text: string | null
          display_color: string | null
          display_id: string | null
          gtin: string | null
          handle: string | null
          id: number
          ignore: string | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          shipping_profile_associated: string | null
          shipping_profile_associated_last_sync_at: string | null
          shipping_profile_sync_status: string | null
          shopify_last_synced_at: string | null
          shopify_product_id: string | null
          shopify_product_variant_id: string | null
          sku: string | null
          skulabs_sku: string | null
          sync_status: string | null
          type: string | null
          variant_barcode: string | null
          variant_compare_to_price: number | null
          variant_price: string | null
          website_true: string | null
          year: string | null
        }
        Insert: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shipping_profile_sync_status?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          sync_status?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: number | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Update: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shipping_profile_sync_status?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          sync_status?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: number | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_product_lookup_20250207: {
        Row: {
          alt_image_text: string | null
          display_color: string | null
          display_id: string | null
          gtin: string | null
          handle: string | null
          id: number
          ignore: string | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          shipping_profile_associated: string | null
          shipping_profile_associated_last_sync_at: string | null
          shipping_profile_sync_status: string | null
          shopify_last_synced_at: string | null
          shopify_product_id: string | null
          shopify_product_variant_id: string | null
          sku: string | null
          skulabs_sku: string | null
          sync_status: string | null
          type: string | null
          variant_barcode: string | null
          variant_compare_to_price: number | null
          variant_price: number | null
          website_true: string | null
          year: string | null
        }
        Insert: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shipping_profile_sync_status?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          sync_status?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: number | null
          variant_price?: number | null
          website_true?: string | null
          year?: string | null
        }
        Update: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shipping_profile_sync_status?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          sync_status?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: number | null
          variant_price?: number | null
          website_true?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_product_lookup_20250221: {
        Row: {
          alt_image_text: string | null
          display_color: string | null
          display_id: string | null
          gtin: string | null
          handle: string | null
          id: number | null
          ignore: string | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          shipping_profile_associated: string | null
          shipping_profile_associated_last_sync_at: string | null
          shipping_profile_sync_status: string | null
          shopify_last_synced_at: string | null
          shopify_product_id: string | null
          shopify_product_variant_id: string | null
          sku: string | null
          skulabs_sku: string | null
          sync_status: string | null
          type: string | null
          variant_barcode: string | null
          variant_compare_to_price: number | null
          variant_price: number | null
          website_true: string | null
          year: string | null
        }
        Insert: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number | null
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shipping_profile_sync_status?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          sync_status?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: number | null
          variant_price?: number | null
          website_true?: string | null
          year?: string | null
        }
        Update: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number | null
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shipping_profile_sync_status?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          sync_status?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: number | null
          variant_price?: number | null
          website_true?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_product_lookup_test_20241205: {
        Row: {
          alt_image_text: string | null
          display_color: string | null
          display_id: string | null
          gtin: string | null
          handle: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          year: string | null
        }
        Insert: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Update: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_relation_product: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shopify_relation_product_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "shopify_make"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "shopify_model"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_product_id_fkey_2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "shopify_product_lookup"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "Type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "Years"
            referencedColumns: ["id"]
          },
        ]
      }
      shopify_relation_product_20241210: {
        Row: {
          created_at: string | null
          id: number
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shopify_relation_product_20241210_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "shopify_make"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_20241210_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "shopify_model"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_20241210_product_id_fkey_2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "shopify_car_cover_lookup_20241210"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_20241210_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "Type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_20241210_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "Years"
            referencedColumns: ["id"]
          },
        ]
      }
      shopify_relation_product_jinwon_20250107: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shopify_relation_product_jinwon_20250107_product_id_fkey_2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "shopify_seat_covers_jinwon_20250107"
            referencedColumns: ["id"]
          },
        ]
      }
      shopify_relation_product_jinwon_20250108: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: []
      }
      shopify_relation_product_jinwon_20250110: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shopify_relation_product_jinwon_20250110_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "shopify_make"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_jinwon_20250110_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "shopify_model"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_jinwon_20250110_product_id_fkey_2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "shopify_car_seatbk_jinwon_20250110"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_jinwon_20250110_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "Type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_jinwon_20250110_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "Years"
            referencedColumns: ["id"]
          },
        ]
      }
      shopify_relation_product_jinwon_20250130: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shopify_relation_product_jinwon_20250130_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "shopify_make"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_jinwon_20250130_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "shopify_model"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_jinwon_20250130_product_id_fkey_2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "shopify_product_lookup_20250130"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_jinwon_20250130_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "Type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_jinwon_20250130_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "Years"
            referencedColumns: ["id"]
          },
        ]
      }
      shopify_relation_product_jinwon_20250207: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shopify_relation_product_jinwon_20250207_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "shopify_make"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_jinwon_20250207_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "shopify_model"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_jinwon_20250207_product_id_fkey_2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "shopify_product_lookup_20250207"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_jinwon_20250207_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "Type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_jinwon_20250207_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "Years"
            referencedColumns: ["id"]
          },
        ]
      }
      shopify_relation_product_seat_cover_black: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shopify_relation_product_seat_cover_black_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "shopify_make"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_seat_cover_black_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "shopify_model"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_seat_cover_black_product_id_fkey_2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "shopify_product_lookup"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_seat_cover_black_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "Type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relation_product_seat_cover_black_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "Years"
            referencedColumns: ["id"]
          },
        ]
      }
      shopify_relations_product_20241212: {
        Row: {
          created_at: string | null
          id: number | null
          make_id: number | null
          model_id: number | null
          product_id: number | null
          type_id: number | null
          updated_at: string | null
          year_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          make_id?: number | null
          model_id?: number | null
          product_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shopify_relations_product_20241212_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "shopify_make"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relations_product_20241212_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "shopify_model"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relations_product_20241212_product_id_fkey_2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "shopify_product_lookup_20241212"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relations_product_20241212_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "Type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopify_relations_product_20241212_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "Years"
            referencedColumns: ["id"]
          },
        ]
      }
      shopify_sample_seat_cover: {
        Row: {
          display_id: string | null
          gtin: string | null
          handle: string | null
          id: string
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          year: string | null
        }
        Insert: {
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id: string
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Update: {
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: string
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_seat_cover_bk_jinwon_20250116: {
        Row: {
          alt_image_text: string | null
          display_color: string | null
          display_id: string | null
          gtin: string | null
          handle: string | null
          id: number
          ignore: string | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          shipping_profile_associated: string | null
          shipping_profile_associated_last_sync_at: string | null
          shopify_last_synced_at: string | null
          shopify_product_id: string | null
          shopify_product_variant_id: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          variant_barcode: string | null
          variant_compare_to_price: string | null
          variant_price: string | null
          website_true: string | null
          year: string | null
        }
        Insert: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: string | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Update: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: string | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_seat_cover_black: {
        Row: {
          display_id: string | null
          handle: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          year: string | null
        }
        Insert: {
          display_id?: string | null
          handle?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Update: {
          display_id?: string | null
          handle?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_seat_cover_lookup_20241210: {
        Row: {
          alt_image_text: string | null
          display_color: string | null
          display_id: string | null
          gtin: string | null
          handle: string | null
          id: number | null
          ignore: string | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          shipping_profile_associated: string | null
          shipping_profile_associated_last_sync_at: string | null
          shopify_last_synced_at: string | null
          shopify_product_id: string | null
          shopify_product_variant_id: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          variant_barcode: string | null
          variant_compare_to_price: number | null
          variant_price: number | null
          website_true: string | null
          year: string | null
        }
        Insert: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number | null
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: number | null
          variant_price?: number | null
          website_true?: string | null
          year?: string | null
        }
        Update: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number | null
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: number | null
          variant_price?: number | null
          website_true?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_seat_cover_preorder_20241126: {
        Row: {
          id: number | null
          preorder: boolean | null
          preorder_date: string | null
          preorder_discount: string | null
          shopify_handle: string | null
          sku: string | null
          skulabs_sku: string | null
          variant_barcode: number | null
          variant_compare_to_price: number | null
          variant_price: number | null
          website_true: boolean | null
        }
        Insert: {
          id?: number | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: string | null
          shopify_handle?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          variant_barcode?: number | null
          variant_compare_to_price?: number | null
          variant_price?: number | null
          website_true?: boolean | null
        }
        Update: {
          id?: number | null
          preorder?: boolean | null
          preorder_date?: string | null
          preorder_discount?: string | null
          shopify_handle?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          variant_barcode?: number | null
          variant_compare_to_price?: number | null
          variant_price?: number | null
          website_true?: boolean | null
        }
        Relationships: []
      }
      shopify_seat_cover_preorder_backup_20241119: {
        Row: {
          id: number | null
          ignore: boolean | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          skulabs_sku: string | null
          website_true: string | null
        }
        Insert: {
          id?: number | null
          ignore?: boolean | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          website_true?: string | null
        }
        Update: {
          id?: number | null
          ignore?: boolean | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          website_true?: string | null
        }
        Relationships: []
      }
      shopify_seat_cover_preorder_bad_20241119: {
        Row: {
          id: number | null
          ignore: boolean | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          skulabs_sku: string | null
          website_true: string | null
        }
        Insert: {
          id?: number | null
          ignore?: boolean | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          website_true?: string | null
        }
        Update: {
          id?: number | null
          ignore?: boolean | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          website_true?: string | null
        }
        Relationships: []
      }
      shopify_seat_cover_preorder_good_20241119: {
        Row: {
          id: number | null
          ignore: boolean | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          shipping_profile_associated: boolean | null
          shipping_profile_associated_last_sync_at: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          shopify_product_id: string | null
          shopify_product_variant_id: string | null
          sku: string | null
          skulabs_sku: string | null
          variant_barcode: string | null
          variant_compare_to_price: number | null
          variant_price: number | null
          website_true: string | null
        }
        Insert: {
          id?: number | null
          ignore?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          shipping_profile_associated?: boolean | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: number | null
          variant_price?: number | null
          website_true?: string | null
        }
        Update: {
          id?: number | null
          ignore?: boolean | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          shipping_profile_associated?: boolean | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: number | null
          variant_price?: number | null
          website_true?: string | null
        }
        Relationships: []
      }
      shopify_seat_cover_preorder_sync_20241119: {
        Row: {
          id: number | null
          ignore: boolean | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: string | null
          shopify_handle: string | null
          shopify_last_synced_at: string | null
          sku: string | null
          skulabs_sku: string | null
          website_true: string | null
        }
        Insert: {
          id?: number | null
          ignore?: boolean | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          website_true?: string | null
        }
        Update: {
          id?: number | null
          ignore?: boolean | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          shopify_handle?: string | null
          shopify_last_synced_at?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          website_true?: string | null
        }
        Relationships: []
      }
      shopify_seat_cover_truck_lookup_20241216: {
        Row: {
          alt_image_text: string | null
          display_color: string | null
          display_id: string | null
          gtin: string | null
          handle: string | null
          id: number | null
          ignore: string | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          shipping_profile_associated: string | null
          shipping_profile_associated_last_sync_at: string | null
          shopify_last_synced_at: string | null
          shopify_product_id: string | null
          shopify_product_variant_id: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          variant_barcode: string | null
          variant_compare_to_price: string | null
          variant_price: string | null
          website_true: string | null
          year: string | null
        }
        Insert: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number | null
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: string | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Update: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number | null
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: string | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_seat_covers_jinwon_20250107: {
        Row: {
          alt_image_text: string | null
          display_color: string | null
          display_id: string | null
          gtin: string | null
          handle: string | null
          id: number
          ignore: string | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          shipping_profile_associated: string | null
          shipping_profile_associated_last_sync_at: string | null
          shopify_last_synced_at: string | null
          shopify_product_id: string | null
          shopify_product_variant_id: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          variant_barcode: string | null
          variant_compare_to_price: string | null
          variant_price: string | null
          website_true: string | null
          year: string | null
        }
        Insert: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: string | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Update: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: string | null
          handle?: string | null
          id?: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: string | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_seat_preorder_bk_be_gr_dg_br_db_20250203: {
        Row: {
          gtin: string | null
          handle: string | null
          id: number | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
        }
        Insert: {
          gtin?: string | null
          handle?: string | null
          id?: number | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
        }
        Update: {
          gtin?: string | null
          handle?: string | null
          id?: number | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
        }
        Relationships: []
      }
      shopify_suv_cover_product: {
        Row: {
          "1st Variation": string | null
          "2nd Variation": string | null
          Color: string | null
          "Final Handle": string | null
          Gtin: number | null
          Handle: string | null
          ID: number | null
          Main: string | null
          Make: string | null
          Model: string | null
          MSRP: number | null
          "Opiton2 Value": string | null
          "Opiton3 Value": string | null
          "Option1 Name": string | null
          "Option1 Value": string | null
          "Option2 Name": string | null
          "Option3 Name": string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          "Sale Price": number | null
          Size: string | null
          SKU: string | null
          SKULABS: string | null
          Sub: string | null
          Tags: string | null
          Title: string | null
          Type: string | null
          "Variant Weight": number | null
        }
        Insert: {
          "1st Variation"?: string | null
          "2nd Variation"?: string | null
          Color?: string | null
          "Final Handle"?: string | null
          Gtin?: number | null
          Handle?: string | null
          ID?: number | null
          Main?: string | null
          Make?: string | null
          Model?: string | null
          MSRP?: number | null
          "Opiton2 Value"?: string | null
          "Opiton3 Value"?: string | null
          "Option1 Name"?: string | null
          "Option1 Value"?: string | null
          "Option2 Name"?: string | null
          "Option3 Name"?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          "Sale Price"?: number | null
          Size?: string | null
          SKU?: string | null
          SKULABS?: string | null
          Sub?: string | null
          Tags?: string | null
          Title?: string | null
          Type?: string | null
          "Variant Weight"?: number | null
        }
        Update: {
          "1st Variation"?: string | null
          "2nd Variation"?: string | null
          Color?: string | null
          "Final Handle"?: string | null
          Gtin?: number | null
          Handle?: string | null
          ID?: number | null
          Main?: string | null
          Make?: string | null
          Model?: string | null
          MSRP?: number | null
          "Opiton2 Value"?: string | null
          "Opiton3 Value"?: string | null
          "Option1 Name"?: string | null
          "Option1 Value"?: string | null
          "Option2 Name"?: string | null
          "Option3 Name"?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          "Sale Price"?: number | null
          Size?: string | null
          SKU?: string | null
          SKULABS?: string | null
          Sub?: string | null
          Tags?: string | null
          Title?: string | null
          Type?: string | null
          "Variant Weight"?: number | null
        }
        Relationships: []
      }
      shopify_suv_handle_picture_update: {
        Row: {
          "Final Handle": string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          SKU: string | null
        }
        Insert: {
          "Final Handle"?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          SKU?: string | null
        }
        Update: {
          "Final Handle"?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          SKU?: string | null
        }
        Relationships: []
      }
      shopify_truck_cover_product: {
        Row: {
          "1st Variation": string | null
          "2nd Variation": string | null
          Color: string | null
          "Final Handle": string | null
          gtin: number | null
          Handle: string | null
          ID: number | null
          Main: string | null
          Make: string | null
          Model: string | null
          MSRP: number | null
          "Opiton2 Value": string | null
          "Opiton3 Value": string | null
          "Option1 Name": string | null
          "Option1 Value": string | null
          "Option2 Name": string | null
          "Option3 Name": string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          "Sale Price": number | null
          Size: string | null
          SKU: string | null
          SKULABS: string | null
          Sub: string | null
          Tags: string | null
          Title: string | null
          Type: string | null
          "Variant Weight": number | null
        }
        Insert: {
          "1st Variation"?: string | null
          "2nd Variation"?: string | null
          Color?: string | null
          "Final Handle"?: string | null
          gtin?: number | null
          Handle?: string | null
          ID?: number | null
          Main?: string | null
          Make?: string | null
          Model?: string | null
          MSRP?: number | null
          "Opiton2 Value"?: string | null
          "Opiton3 Value"?: string | null
          "Option1 Name"?: string | null
          "Option1 Value"?: string | null
          "Option2 Name"?: string | null
          "Option3 Name"?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          "Sale Price"?: number | null
          Size?: string | null
          SKU?: string | null
          SKULABS?: string | null
          Sub?: string | null
          Tags?: string | null
          Title?: string | null
          Type?: string | null
          "Variant Weight"?: number | null
        }
        Update: {
          "1st Variation"?: string | null
          "2nd Variation"?: string | null
          Color?: string | null
          "Final Handle"?: string | null
          gtin?: number | null
          Handle?: string | null
          ID?: number | null
          Main?: string | null
          Make?: string | null
          Model?: string | null
          MSRP?: number | null
          "Opiton2 Value"?: string | null
          "Opiton3 Value"?: string | null
          "Option1 Name"?: string | null
          "Option1 Value"?: string | null
          "Option2 Name"?: string | null
          "Option3 Name"?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          "Sale Price"?: number | null
          Size?: string | null
          SKU?: string | null
          SKULABS?: string | null
          Sub?: string | null
          Tags?: string | null
          Title?: string | null
          Type?: string | null
          "Variant Weight"?: number | null
        }
        Relationships: []
      }
      shopify_truck_handle_picture_update: {
        Row: {
          "Final Handle": string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          SKU: string | null
        }
        Insert: {
          "Final Handle"?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          SKU?: string | null
        }
        Update: {
          "Final Handle"?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          SKU?: string | null
        }
        Relationships: []
      }
      shopify_truck_lookup_test_20241213: {
        Row: {
          alt_image_text: string | null
          display_color: string | null
          display_id: string | null
          gtin: number | null
          handle: string | null
          id: number
          ignore: string | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          shipping_profile_associated: string | null
          shipping_profile_associated_last_sync_at: string | null
          shopify_last_synced_at: string | null
          shopify_product_id: string | null
          shopify_product_variant_id: string | null
          sku: string | null
          skulabs_sku: string | null
          type: string | null
          variant_barcode: string | null
          variant_compare_to_price: string | null
          variant_price: string | null
          website_true: string | null
          year: string | null
        }
        Insert: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: number | null
          handle?: string | null
          id: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: string | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Update: {
          alt_image_text?: string | null
          display_color?: string | null
          display_id?: string | null
          gtin?: number | null
          handle?: string | null
          id?: number
          ignore?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          shipping_profile_associated?: string | null
          shipping_profile_associated_last_sync_at?: string | null
          shopify_last_synced_at?: string | null
          shopify_product_id?: string | null
          shopify_product_variant_id?: string | null
          sku?: string | null
          skulabs_sku?: string | null
          type?: string | null
          variant_barcode?: string | null
          variant_compare_to_price?: string | null
          variant_price?: string | null
          website_true?: string | null
          year?: string | null
        }
        Relationships: []
      }
      shopify_type: {
        Row: {
          created_at: string | null
          description: string | null
          id: number | null
          name: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number | null
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number | null
          name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      shopify_vehicle_cover_product: {
        Row: {
          "1st Variation": string | null
          "2nd Variation": string | null
          Color: string | null
          "Final Handle": string | null
          Gtin: number | null
          Handle: string | null
          ID: number
          Main: string | null
          Make: string | null
          Model: string | null
          MSRP: string | null
          "Opiton2 Value": string | null
          "Opiton3 Value": string | null
          "Option1 Name": string | null
          "Option1 Value": string | null
          "Option2 Name": string | null
          "Option3 Name": string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          "Sale Price": string | null
          Size: string | null
          SKU: number | null
          SKULABS: string | null
          Sub: string | null
          Tags: string | null
          Title: string | null
          Type: string | null
          "Variant Weight": number | null
        }
        Insert: {
          "1st Variation"?: string | null
          "2nd Variation"?: string | null
          Color?: string | null
          "Final Handle"?: string | null
          Gtin?: number | null
          Handle?: string | null
          ID: number
          Main?: string | null
          Make?: string | null
          Model?: string | null
          MSRP?: string | null
          "Opiton2 Value"?: string | null
          "Opiton3 Value"?: string | null
          "Option1 Name"?: string | null
          "Option1 Value"?: string | null
          "Option2 Name"?: string | null
          "Option3 Name"?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          "Sale Price"?: string | null
          Size?: string | null
          SKU?: number | null
          SKULABS?: string | null
          Sub?: string | null
          Tags?: string | null
          Title?: string | null
          Type?: string | null
          "Variant Weight"?: number | null
        }
        Update: {
          "1st Variation"?: string | null
          "2nd Variation"?: string | null
          Color?: string | null
          "Final Handle"?: string | null
          Gtin?: number | null
          Handle?: string | null
          ID?: number
          Main?: string | null
          Make?: string | null
          Model?: string | null
          MSRP?: string | null
          "Opiton2 Value"?: string | null
          "Opiton3 Value"?: string | null
          "Option1 Name"?: string | null
          "Option1 Value"?: string | null
          "Option2 Name"?: string | null
          "Option3 Name"?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          "Sale Price"?: string | null
          Size?: string | null
          SKU?: number | null
          SKULABS?: string | null
          Sub?: string | null
          Tags?: string | null
          Title?: string | null
          Type?: string | null
          "Variant Weight"?: number | null
        }
        Relationships: []
      }
      sku_lab_sku_item_id_map: {
        Row: {
          created_at: string
          id: number
          item_id: string | null
          sku: string | null
          type: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          item_id?: string | null
          sku?: string | null
          type?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          item_id?: string | null
          sku?: string | null
          type?: string | null
        }
        Relationships: []
      }
      sku_to_shopify_handle_20241007: {
        Row: {
          handle: string | null
          sku: string | null
        }
        Insert: {
          handle?: string | null
          sku?: string | null
        }
        Update: {
          handle?: string | null
          sku?: string | null
        }
        Relationships: []
      }
      sku_to_shopify_handle_seats_20241008: {
        Row: {
          handle: string | null
          sku: string | null
        }
        Insert: {
          handle?: string | null
          sku?: string | null
        }
        Update: {
          handle?: string | null
          sku?: string | null
        }
        Relationships: []
      }
      Type: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      Type_20241010: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          name: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id: number
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      type_make_model: {
        Row: {
          created_at: string
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          type: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          type?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          type?: string | null
        }
        Relationships: []
      }
      type_make_year_distinct: {
        Row: {
          display_id: string | null
          id: string | null
          make: string | null
          make_slug: string | null
          parent_generation: string | null
          type: string | null
          year_options: string | null
        }
        Insert: {
          display_id?: string | null
          id?: string | null
          make?: string | null
          make_slug?: string | null
          parent_generation?: string | null
          type?: string | null
          year_options?: string | null
        }
        Update: {
          display_id?: string | null
          id?: string | null
          make?: string | null
          make_slug?: string | null
          parent_generation?: string | null
          type?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20240904_cars: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20240907_full: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs SKU": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs SKU"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs SKU"?: string | null
        }
        Relationships: []
      }
      update_20240913_front: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20240917: {
        Row: {
          id: number
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id: number
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20240920: {
        Row: {
          display_color: string | null
          display_set: string | null
          gtin: string | null
          id: number
          make: string | null
          model: string | null
          MPN: string | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
        }
        Insert: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id: number
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Update: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      update_20240923_front: {
        Row: {
          display_color: string | null
          display_set: string | null
          gtin: string | null
          id: number | null
          make: string | null
          model: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20240923_front_all: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20240923_full: {
        Row: {
          display_color: string | null
          display_set: string | null
          gtin: string | null
          id: number | null
          make: string | null
          model: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20240923_full_all: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20240925_front: {
        Row: {
          display_color: string | null
          display_set: string | null
          gtin: string | null
          id: number | null
          make: string | null
          model: string | null
          MPN: string | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20240925_full: {
        Row: {
          display_color: string | null
          display_set: string | null
          gtin: string | null
          id: number | null
          make: string | null
          model: string | null
          MPN: string | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
        }
        Insert: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Update: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      update_20240925_full_2: {
        Row: {
          display_color: string | null
          display_set: string | null
          gtin: string | null
          id: number | null
          make: string | null
          model: string | null
          MPN: string | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          product_video_360: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
        }
        Insert: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          product_video_360?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Update: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          product_video_360?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      update_20240926_front: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20240926_full: {
        Row: {
          "back seat SKU": string | null
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          "Full Set quantity": string | null
          "full set SKU": string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          "back seat SKU"?: string | null
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          "Full Set quantity"?: string | null
          "full set SKU"?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          "back seat SKU"?: string | null
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          "Full Set quantity"?: string | null
          "full set SKU"?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20240927_front: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20240927_full: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs SKU": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs SKU"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs SKU"?: string | null
        }
        Relationships: []
      }
      update_20241001_car: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241001_car_2: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241002_car: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241002_seat: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241003_car: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241003_car_2: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20241003_front: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241003_full: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241008_seat: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241016_seats: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241017: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241017_seat_car: {
        Row: {
          id: number
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id: number
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241018_cars: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241018_seats: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241019: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241021: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241022_car: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241023_floor_mats: {
        Row: {
          id: number | null
          item_status: string | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          item_status?: string | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          item_status?: string | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241024: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241025: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241025_2: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241028: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241030: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241030_2: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241031: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241104: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241104_2: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241105: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241105_2: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241107: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241107_2: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241107_3: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241111: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241111_2: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241112: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241113: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241115: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
          website_true: boolean | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
          website_true?: boolean | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
          website_true?: boolean | null
        }
        Relationships: []
      }
      update_20241118: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
          website_true: boolean | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
          website_true?: boolean | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
          website_true?: boolean | null
        }
        Relationships: []
      }
      update_20241119: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
          website_true: boolean | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
          website_true?: boolean | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
          website_true?: boolean | null
        }
        Relationships: []
      }
      update_20241120: {
        Row: {
          id: number | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241121: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241125: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: string | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241127_car_cover_preorder: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241127_car_covers: {
        Row: {
          gtin: string | null
          id: number | null
          MPN: string | null
          parent_generation: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          gtin?: string | null
          id?: number | null
          MPN?: string | null
          parent_generation?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          gtin?: string | null
          id?: number | null
          MPN?: string | null
          parent_generation?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20241129_f250_sb2: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          website_true: boolean | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          website_true?: boolean | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          website_true?: boolean | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20241129_f250_sb2_full: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          website_true: boolean | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          website_true?: boolean | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          website_true?: boolean | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20241202: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241202_floormat: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241202_seat: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20241217_car_cover_photos_do: {
        Row: {
          feature: string | null
          id: number | null
          product: string | null
        }
        Insert: {
          feature?: string | null
          id?: number | null
          product?: string | null
        }
        Update: {
          feature?: string | null
          id?: number | null
          product?: string | null
        }
        Relationships: []
      }
      update_20241218_buick: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20241218_floormats: {
        Row: {
          banner: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: number | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20241220_floormat_image_2: {
        Row: {
          banner: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          item_status: string | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          item_status?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          item_status?: string | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20241220_floormat_images: {
        Row: {
          banner: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20241223_floormats: {
        Row: {
          banner: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: string | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: string | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: string | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: string | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20241223_floormats_2: {
        Row: {
          banner: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20241227_floormat: {
        Row: {
          banner: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20241227_seat_defender: {
        Row: {
          back: string | null
          "back seat SKU": string | null
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          front: string | null
          "Full Set quantity": string | null
          "full set SKU": string | null
          gtin: number | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: number | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          back?: string | null
          "back seat SKU"?: string | null
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          front?: string | null
          "Full Set quantity"?: string | null
          "full set SKU"?: string | null
          gtin?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          back?: string | null
          "back seat SKU"?: string | null
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          front?: string | null
          "Full Set quantity"?: string | null
          "full set SKU"?: string | null
          gtin?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: number | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20241227_seat_land_rover: {
        Row: {
          id: number | null
          submodel1: string | null
          submodel2: string | null
        }
        Insert: {
          id?: number | null
          submodel1?: string | null
          submodel2?: string | null
        }
        Update: {
          id?: number | null
          submodel1?: string | null
          submodel2?: string | null
        }
        Relationships: []
      }
      update_20241230_floor_mat_pg_yg: {
        Row: {
          id: number | null
          parent_generation: string | null
          year_generation: string | null
        }
        Insert: {
          id?: number | null
          parent_generation?: string | null
          year_generation?: string | null
        }
        Update: {
          id?: number | null
          parent_generation?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      update_20250102: {
        Row: {
          id: number | null
          MPN: string | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20250103_floormat_2: {
        Row: {
          id: number | null
          MPN: string | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20250103_floormats: {
        Row: {
          banner: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          submodel3: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          submodel3?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_20250128: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20250129: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20250130: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20250130_2: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20250213: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
          website_true: boolean | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
          website_true?: boolean | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
          website_true?: boolean | null
        }
        Relationships: []
      }
      update_20250213_delete: {
        Row: {
          id: number | null
          MPN: string | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_20250213_size_change: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
          website_true: boolean | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
          website_true?: boolean | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
          website_true?: boolean | null
        }
        Relationships: []
      }
      update_20250213_website_true: {
        Row: {
          id: number | null
          MPN: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          sku: string | null
          "skulabs sku": string | null
          website_true: boolean | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
          website_true?: boolean | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          sku?: string | null
          "skulabs sku"?: string | null
          website_true?: boolean | null
        }
        Relationships: []
      }
      update_corvette_20250205: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_corvette_20250206: {
        Row: {
          gtin: number | null
          id: number | null
          make: string | null
          model: string | null
          parent_generation: string | null
          sku: string | null
          submodel1: string | null
          year_generation: string | null
        }
        Insert: {
          gtin?: number | null
          id?: number | null
          make?: string | null
          model?: string | null
          parent_generation?: string | null
          sku?: string | null
          submodel1?: string | null
          year_generation?: string | null
        }
        Update: {
          gtin?: number | null
          id?: number | null
          make?: string | null
          model?: string | null
          parent_generation?: string | null
          sku?: string | null
          submodel1?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      update_feature_product_fix_20240923_front: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_feature_product_fix_20240923_full: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_front_20240920: {
        Row: {
          display_color: string | null
          display_set: string | null
          gtin: string | null
          id: number | null
          make: string | null
          model: string | null
          MPN: string | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
        }
        Insert: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Update: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      update_front_20240920_2: {
        Row: {
          display_color: string | null
          display_set: string | null
          gtin: string | null
          id: number | null
          make: string | null
          model: string | null
          MPN: string | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
        }
        Insert: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Update: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      update_full_20240920: {
        Row: {
          display_color: string | null
          display_set: string | null
          gtin: string | null
          id: number | null
          make: string | null
          model: string | null
          MPN: string | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
        }
        Insert: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Update: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      update_full_20240920_2: {
        Row: {
          display_color: string | null
          display_set: string | null
          gtin: string | null
          id: number | null
          make: string | null
          model: string | null
          MPN: string | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
        }
        Insert: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Update: {
          display_color?: string | null
          display_set?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          model?: string | null
          MPN?: string | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
        }
        Relationships: []
      }
      update_hyeon_20241025: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: number | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: string | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_hyeon_20241029: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: number | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: number | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: number | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_hyeon_20241101: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: number | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: number | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: number | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: number | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_hyeon_20241107: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: number | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: number | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: number | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_hyeon_20241111: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: string | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: string | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_hyeon_20241112: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_hyeon_20241119: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: number | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_hyeon_20241122: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: number | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: number | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_hyeon_20241126: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_hyeon_20241127: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_hyeon_20241127_2: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_hyeon_20241127_3: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_seat_covers_20250211: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_seat_covers_20250211_2: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: string | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          website_true: boolean | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          website_true?: boolean | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: string | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          website_true?: boolean | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_seat_covers_20250212: {
        Row: {
          banner: string | null
          display_color: string | null
          display_id: string | null
          display_set: string | null
          feature: string | null
          gtin: string | null
          id: number | null
          make: string | null
          make_slug: string | null
          model: string | null
          model_slug: string | null
          MPN: string | null
          msrp: number | null
          parent_generation: string | null
          preorder_date: string | null
          preorder_discount: number | null
          preorder_true: boolean | null
          price: number | null
          product: string | null
          product_video_360: string | null
          product_video_carousel: string | null
          product_video_carousel_thumbnail: string | null
          product_video_zoom: string | null
          quantity: string | null
          sku: string | null
          "skulabs sku": string | null
          submodel1: string | null
          submodel2: string | null
          type: string | null
          website_true: boolean | null
          year_generation: string | null
          year_options: string | null
        }
        Insert: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          website_true?: boolean | null
          year_generation?: string | null
          year_options?: string | null
        }
        Update: {
          banner?: string | null
          display_color?: string | null
          display_id?: string | null
          display_set?: string | null
          feature?: string | null
          gtin?: string | null
          id?: number | null
          make?: string | null
          make_slug?: string | null
          model?: string | null
          model_slug?: string | null
          MPN?: string | null
          msrp?: number | null
          parent_generation?: string | null
          preorder_date?: string | null
          preorder_discount?: number | null
          preorder_true?: boolean | null
          price?: number | null
          product?: string | null
          product_video_360?: string | null
          product_video_carousel?: string | null
          product_video_carousel_thumbnail?: string | null
          product_video_zoom?: string | null
          quantity?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
          submodel1?: string | null
          submodel2?: string | null
          type?: string | null
          website_true?: boolean | null
          year_generation?: string | null
          year_options?: string | null
        }
        Relationships: []
      }
      update_seat_covers_sku_20250110: {
        Row: {
          id: number | null
          MPN: string | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      update_website_true_20250205: {
        Row: {
          id: number | null
          MPN: string | null
          sku: string | null
          "skulabs sku": string | null
        }
        Insert: {
          id?: number | null
          MPN?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Update: {
          id?: number | null
          MPN?: string | null
          sku?: string | null
          "skulabs sku"?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          address: string | null
          address_2: string | null
          city: string | null
          created_at: string
          email: string | null
          id: number
          image_path: string | null
          last_name: string | null
          name: string | null
          password: string | null
          phone: string | null
          pincode: string | null
          shipping_address: string | null
          shipping_address_2: string | null
          shipping_city: string | null
          shipping_pincode: string | null
          shipping_state: string | null
          state: string | null
        }
        Insert: {
          address?: string | null
          address_2?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          id?: number
          image_path?: string | null
          last_name?: string | null
          name?: string | null
          password?: string | null
          phone?: string | null
          pincode?: string | null
          shipping_address?: string | null
          shipping_address_2?: string | null
          shipping_city?: string | null
          shipping_pincode?: string | null
          shipping_state?: string | null
          state?: string | null
        }
        Update: {
          address?: string | null
          address_2?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          id?: number
          image_path?: string | null
          last_name?: string | null
          name?: string | null
          password?: string | null
          phone?: string | null
          pincode?: string | null
          shipping_address?: string | null
          shipping_address_2?: string | null
          shipping_city?: string | null
          shipping_pincode?: string | null
          shipping_state?: string | null
          state?: string | null
        }
        Relationships: []
      }
      Years: {
        Row: {
          created_at: string
          id: number
          name: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      filter_records:
        | {
            Args: {
              from_date: string
              to_date: string
            }
            Returns: {
              billing_address_city: string | null
              billing_address_country: string | null
              billing_address_line_1: string | null
              billing_address_line_2: string | null
              billing_address_postal_code: string | null
              billing_address_state: string | null
              billing_customer_name: string | null
              card_amount: number | null
              card_brand: string | null
              card_exp_month: string | null
              card_exp_year: string | null
              card_fingerprint: string | null
              card_funding: string | null
              card_last_four: string | null
              created_at: string | null
              created_at_pst: string | null
              currency: string | null
              customer_email: string | null
              customer_id: number | null
              customer_name: string | null
              customer_phone: string | null
              id: number
              notes: string | null
              order_date: string | null
              order_id: string | null
              payment_date: string | null
              payment_gateway: string | null
              payment_gateway_customer_id: string | null
              payment_method: string | null
              payment_method_id: string | null
              payment_status: string | null
              review_invitation_last_attempt: string | null
              review_invitation_status: string | null
              ship_by_date: string | null
              shipping_address_city: string | null
              shipping_address_country: string | null
              shipping_address_line_1: string | null
              shipping_address_line_2: string | null
              shipping_address_postal_code: string | null
              shipping_address_state: string | null
              shipping_carrier: string | null
              shipping_confirmation_email_sent: boolean | null
              shipping_confirmation_email_sent_by: string | null
              shipping_confirmation_email_sent_date: string | null
              shipping_previous_status: string | null
              shipping_service: string | null
              shipping_status: string | null
              shipping_status_last_updated: string | null
              shipping_status_last_updated_pst: string | null
              shipping_tracking_number: string | null
              skus: string | null
              status: string | null
              total_amount: number | null
              total_discount_amount: number | null
              total_original_amount: number | null
              total_tax: number | null
              transaction_id: string | null
              updated_at: string | null
              wallet_type: string | null
            }[]
          }
        | {
            Args: {
              from_date: string
              to_date: string
            }
            Returns: {
              billing_address_city: string | null
              billing_address_country: string | null
              billing_address_line_1: string | null
              billing_address_line_2: string | null
              billing_address_postal_code: string | null
              billing_address_state: string | null
              billing_customer_name: string | null
              card_amount: number | null
              card_brand: string | null
              card_exp_month: string | null
              card_exp_year: string | null
              card_fingerprint: string | null
              card_funding: string | null
              card_last_four: string | null
              created_at: string | null
              created_at_pst: string | null
              currency: string | null
              customer_email: string | null
              customer_id: number | null
              customer_name: string | null
              customer_phone: string | null
              id: number
              notes: string | null
              order_date: string | null
              order_id: string | null
              payment_date: string | null
              payment_gateway: string | null
              payment_gateway_customer_id: string | null
              payment_method: string | null
              payment_method_id: string | null
              payment_status: string | null
              review_invitation_last_attempt: string | null
              review_invitation_status: string | null
              ship_by_date: string | null
              shipping_address_city: string | null
              shipping_address_country: string | null
              shipping_address_line_1: string | null
              shipping_address_line_2: string | null
              shipping_address_postal_code: string | null
              shipping_address_state: string | null
              shipping_carrier: string | null
              shipping_confirmation_email_sent: boolean | null
              shipping_confirmation_email_sent_by: string | null
              shipping_confirmation_email_sent_date: string | null
              shipping_previous_status: string | null
              shipping_service: string | null
              shipping_status: string | null
              shipping_status_last_updated: string | null
              shipping_status_last_updated_pst: string | null
              shipping_tracking_number: string | null
              skus: string | null
              status: string | null
              total_amount: number | null
              total_discount_amount: number | null
              total_original_amount: number | null
              total_tax: number | null
              transaction_id: string | null
              updated_at: string | null
              wallet_type: string | null
            }[]
          }
      get_all_info: {
        Args: {
          order_ids: string[]
        }
        Returns: {
          order_id: string
          order_items_id: number
          total_amount: number
          customer_name: string
          customer_email: string
          customer_phone: string
          shipping_address_line_1: string
          shipping_address_line_2: string
          shipping_address_city: string
          shipping_address_state: string
          shipping_address_postal_code: string
          shipping_address_country: string
          skus: Json
        }[]
      }
      get_current_user_and_timeout: {
        Args: Record<PropertyKey, never>
        Returns: {
          user_name: string
          statement_timeout: string
        }[]
      }
      get_current_user_and_timeout_and_set_timeout: {
        Args: Record<PropertyKey, never>
        Returns: {
          user_name: string
          statement_timeout: string
        }[]
      }
      get_daily_order_totals: {
        Args: {
          days_ago?: number
        }
        Returns: {
          order_date: string
          order_count: number
          daily_total_amount: number
        }[]
      }
      get_default_seat_cover_products_sorted_by_color: {
        Args: {
          p_type?: string
          p_cover?: string
        }
        Returns: {
          id: number
          sku: string
          type: string
          make: string
          model: string
          year_generation: string
          parent_generation: string
          submodel1: string
          submodel2: string
          submodel3: string
          product: string
          display_color: string
          msrp: number
          price: number
          quantity: string
          display_id: string
          make_slug: string
          model_slug: string
          year_options: string
          display_set: string
          preorder: boolean
          preorder_date: string
          preorder_discount: number
          gtin: string
          mpn: string
        }[]
      }
      get_default_seat_cover_products_sorted_by_color_20240828: {
        Args: {
          p_type?: string
          p_cover?: string
        }
        Returns: {
          id: number
          sku: string
          type: string
          make: string
          model: string
          year_generation: string
          parent_generation: string
          submodel1: string
          submodel2: string
          submodel3: string
          product: string
          display_color: string
          msrp: number
          price: number
          quantity: string
          display_id: string
          make_slug: string
          model_slug: string
          year_options: string
          display_set: string
          preorder: boolean
          preorder_date: string
          preorder_discount: number
          gtin: string
          mpn: string
        }[]
      }
      get_default_seat_cover_products_sorted_by_color_20240913: {
        Args: {
          p_type?: string
          p_cover?: string
        }
        Returns: {
          id: number
          sku: string
          type: string
          make: string
          model: string
          year_generation: string
          parent_generation: string
          submodel1: string
          submodel2: string
          submodel3: string
          product: string
          display_color: string
          msrp: number
          price: number
          quantity: string
          display_id: string
          make_slug: string
          model_slug: string
          year_options: string
          display_set: string
          preorder: boolean
          preorder_date: string
          preorder_discount: number
          gtin: string
          mpn: string
        }[]
      }
      get_default_seat_cover_products_sorted_by_color_20241224: {
        Args: {
          p_type?: string
          p_cover?: string
        }
        Returns: {
          id: number
          sku: string
          type: string
          make: string
          model: string
          year_generation: string
          parent_generation: string
          submodel1: string
          submodel2: string
          submodel3: string
          product: string
          display_color: string
          msrp: number
          price: number
          quantity: string
          display_id: string
          make_slug: string
          model_slug: string
          year_options: string
          display_set: string
          preorder: boolean
          preorder_date: string
          preorder_discount: number
          gtin: string
          mpn: string
        }[]
      }
      get_distinct_makes_by_type: {
        Args: {
          type: string
        }
        Returns: {
          make: string
        }[]
      }
      get_distinct_makes_by_type_seatcover: {
        Args: {
          type: string
        }
        Returns: {
          make: string
        }[]
      }
      get_distinct_models_by_type_make: {
        Args: {
          type: string
          make: string
        }
        Returns: {
          model: string
        }[]
      }
      get_distinct_models_by_type_make_slug: {
        Args: {
          type: string
          make: string
        }
        Returns: {
          model: string
        }[]
      }
      get_distinct_parent_generations: {
        Args: {
          type: string
          make: string
          model: string
        }
        Returns: {
          parent_generation: string
        }[]
      }
      get_distinct_review_images: {
        Args: {
          p_table_name: string
          p_type?: string
          p_make_slug?: string
          p_model_slug?: string
          p_parent_generation?: string
        }
        Returns: {
          rating_stars: number
          helpful: number
          reviewed_at: string
          gpt_review_id: string
          model: string
          year_generation: string
          submodel1: string
          submodel2: string
          mirror: string
          review_description: string
          make_slug: string
          review_title: string
          review_author: string
          review_image: string
          model_slug: string
          size: string
          sku: string
          parent_generation: string
          product_type: string
          product_name: string
          type: string
          make: string
          verified_status: string
          recommend: string
        }[]
      }
      get_distinct_review_images_20240619: {
        Args: {
          p_table_name: string
          p_type?: string
          p_make_slug?: string
          p_model_slug?: string
          p_parent_generation?: string
        }
        Returns: {
          rating_stars: number
          helpful: number
          reviewed_at: string
          gpt_review_id: string
          model: string
          year_generation: string
          submodel1: string
          submodel2: string
          mirror: string
          review_description: string
          make_slug: string
          review_title: string
          review_author: string
          review_image: string
          model_slug: string
          size: string
          sku: string
          parent_generation: string
          product_type: string
          product_name: string
          type: string
          make: string
        }[]
      }
      get_distinct_sku_lab_skus: {
        Args: Record<PropertyKey, never>
        Returns: {
          "skulabs SKU": string
        }[]
      }
      get_distinct_sku_lab_skus_count: {
        Args: Record<PropertyKey, never>
        Returns: {
          "skulabs SKU": string
        }[]
      }
      get_distinct_year_generation_by_type_make_model_year: {
        Args: {
          type: string
          make: string
          model: string
          year: string
        }
        Returns: {
          year_generation: string
        }[]
      }
      get_distinct_years_by_type_make_model: {
        Args: {
          type: string
          make: string
          model: string
        }
        Returns: {
          year_options: string
        }[]
      }
      get_hourly_orders_summary: {
        Args: Record<PropertyKey, never>
        Returns: {
          hour: number
          car_cover_orders_count: number
          seat_cover_orders_count: number
        }[]
      }
      get_hourly_orders_summary_last_few_days: {
        Args: Record<PropertyKey, never>
        Returns: {
          hour: string
          total_completed_orders_count: number
        }[]
      }
      get_last_day_orders: {
        Args: Record<PropertyKey, never>
        Returns: {
          order_id: number
          customer_name: string
          sku: string
          transaction_id: number
        }[]
      }
      get_make_and_slug: {
        Args: {
          type_param: string
          display_id_param: string
          year_param: string
        }
        Returns: {
          make: string
          make_slug: string
        }[]
      }
      get_make_relation: {
        Args: {
          year_id_web: number
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_make_relation_20240110: {
        Args: {
          year_id_web: number
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_make_relation_20241115: {
        Args: {
          year_id_web: number
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_make_relation_20241206: {
        Args: {
          year_id_web: number
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_make_relation_shopify: {
        Args: {
          year_id_web: number
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_make_relation_shopify_20241211: {
        Args: {
          year_id_web: number
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_make_relation_shopify_20250107: {
        Args: {
          year_id_web: number
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_make_relation_shopify_20250108: {
        Args: {
          year_id_web: number
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_make_relation_shopify_20250110: {
        Args: {
          year_id_web: number
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_make_relation_shopify_20250130: {
        Args: {
          year_id_web: number
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_make_relation_shopify_20250207: {
        Args: {
          year_id_web: number
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_make_relations: {
        Args: {
          year_id_web: number
          type_id_web: number
        }
        Returns: {
          make_id: number
          name: string
        }[]
      }
      get_make_relations_web: {
        Args: {
          year_id_web: number
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_model_by_type_id_make_id_relation: {
        Args: {
          type_id_web: number
          make_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_next_sequence: {
        Args: {
          p_type: string
          p_date: string
        }
        Returns: string
      }
      get_order_analytics: {
        Args: {
          start_date: string
          end_date: string
        }
        Returns: {
          category: string
          order_type: string
          count: number
        }[]
      }
      get_orders_summary_last_30_days: {
        Args: Record<PropertyKey, never>
        Returns: {
          created_at_pst: string
          complete_orders_count: number
          completed_orders_count: number
          total_completed_orders_count: number
          pending_orders_count: number
          cl_pre_orders_pending_count: number
          cl_pre_orders_not_pending_count: number
        }[]
      }
      get_orders_summary_last_7_days: {
        Args: Record<PropertyKey, never>
        Returns: {
          created_at_pst: string
          complete_orders_count: number
          completed_orders_count: number
          total_completed_orders_count: number
          pending_orders_count: number
          cl_pre_orders_pending_count: number
          cl_pre_orders_not_pending_count: number
        }[]
      }
      get_orders_summary_last_day: {
        Args: Record<PropertyKey, never>
        Returns: {
          hour: string
          complete_orders_count: number
          completed_orders_count: number
          total_completed_orders_count: number
          pending_orders_count: number
          cl_pre_orders_pending_count: number
          cl_pre_orders_not_pending_count: number
        }[]
      }
      get_product_reviews_summary: {
        Args: {
          table_name: string
          type?: string
          make?: string
          model?: string
          year?: string
          submodel?: string
          submodel2?: string
        }
        Returns: {
          total_reviews: number
          average_score: number
        }[]
      }
      get_product_reviews_summary_20240619: {
        Args: {
          table_name: string
          type?: string
          make?: string
          model?: string
          year?: string
          submodel?: string
          submodel2?: string
        }
        Returns: {
          total_reviews: number
          average_score: number
        }[]
      }
      get_public_tables: {
        Args: Record<PropertyKey, never>
        Returns: {
          table_name: string
        }[]
      }
      get_seat_cover_products_sorted_by_color: {
        Args: {
          p_type?: string
          p_cover?: string
          p_make?: string
          p_model?: string
          p_year?: string
          p_submodel?: string
          p_submodel2?: string
          p_submodel3?: string
        }
        Returns: {
          id: number
          sku: string
          type: string
          make: string
          model: string
          year_generation: string
          parent_generation: string
          submodel1: string
          submodel2: string
          submodel3: string
          product: string
          display_color: string
          msrp: number
          price: number
          quantity: string
          display_id: string
          make_slug: string
          model_slug: string
          year_options: string
          display_set: string
          preorder: boolean
          preorder_date: string
          preorder_discount: number
          gtin: string
          mpn: string
          "skulabs SKU": string
          website_true: string
        }[]
      }
      get_seat_cover_products_sorted_by_color_20240815_forIDFix_NEW: {
        Args: {
          p_type?: string
          p_cover?: string
          p_make?: string
          p_model?: string
          p_year?: string
          p_submodel?: string
          p_submodel2?: string
          p_submodel3?: string
        }
        Returns: {
          id: number
          sku: string
          type: string
          make: string
          model: string
          year_generation: string
          parent_generation: string
          submodel1: string
          submodel2: string
          submodel3: string
          product: string
          display_color: string
          msrp: number
          price: number
          quantity: string
          display_id: string
          make_slug: string
          model_slug: string
          year_options: string
          display_set: string
          preorder: boolean
          preorder_date: string
          preorder_discount: number
          gtin: string
          mpn: string
        }[]
      }
      get_seat_cover_products_sorted_by_color_20240828: {
        Args: {
          p_type?: string
          p_cover?: string
          p_make?: string
          p_model?: string
          p_year?: string
          p_submodel?: string
          p_submodel2?: string
          p_submodel3?: string
        }
        Returns: {
          id: number
          sku: string
          type: string
          make: string
          model: string
          year_generation: string
          parent_generation: string
          submodel1: string
          submodel2: string
          submodel3: string
          product: string
          display_color: string
          msrp: number
          price: number
          quantity: string
          display_id: string
          make_slug: string
          model_slug: string
          year_options: string
          display_set: string
          preorder: boolean
          preorder_date: string
          preorder_discount: number
          gtin: string
          mpn: string
          "skulabs SKU": string
        }[]
      }
      get_seat_cover_products_sorted_by_color_20240913: {
        Args: {
          p_type?: string
          p_cover?: string
          p_make?: string
          p_model?: string
          p_year?: string
          p_submodel?: string
          p_submodel2?: string
          p_submodel3?: string
        }
        Returns: {
          id: number
          sku: string
          type: string
          make: string
          model: string
          year_generation: string
          parent_generation: string
          submodel1: string
          submodel2: string
          submodel3: string
          product: string
          display_color: string
          msrp: number
          price: number
          quantity: string
          display_id: string
          make_slug: string
          model_slug: string
          year_options: string
          display_set: string
          preorder: boolean
          preorder_date: string
          preorder_discount: number
          gtin: string
          mpn: string
          "skulabs SKU": string
        }[]
      }
      get_seat_cover_products_sorted_by_color_20241206: {
        Args: {
          p_type?: string
          p_cover?: string
          p_make?: string
          p_model?: string
          p_year?: string
          p_submodel?: string
          p_submodel2?: string
          p_submodel3?: string
        }
        Returns: {
          id: number
          sku: string
          type: string
          make: string
          model: string
          year_generation: string
          parent_generation: string
          submodel1: string
          submodel2: string
          submodel3: string
          product: string
          display_color: string
          msrp: number
          price: number
          quantity: string
          display_id: string
          make_slug: string
          model_slug: string
          year_options: string
          display_set: string
          preorder: boolean
          preorder_date: string
          preorder_discount: number
          gtin: string
          mpn: string
          "skulabs SKU": string
          website_true: string
        }[]
      }
      get_seat_cover_products_sorted_by_color_20241224: {
        Args: {
          p_type?: string
          p_cover?: string
          p_make?: string
          p_model?: string
          p_year?: string
          p_submodel?: string
          p_submodel2?: string
          p_submodel3?: string
        }
        Returns: {
          id: number
          sku: string
          type: string
          make: string
          model: string
          year_generation: string
          parent_generation: string
          submodel1: string
          submodel2: string
          submodel3: string
          product: string
          display_color: string
          msrp: number
          price: number
          quantity: string
          display_id: string
          make_slug: string
          model_slug: string
          year_options: string
          display_set: string
          preorder: boolean
          preorder_date: string
          preorder_discount: number
          gtin: string
          mpn: string
          "skulabs SKU": string
          website_true: string
        }[]
      }
      get_seat_cover_products_sorted_by_color_preorder_20240709: {
        Args: {
          p_type?: string
          p_cover?: string
          p_make?: string
          p_model?: string
          p_year?: string
          p_submodel?: string
          p_submodel2?: string
          p_submodel3?: string
        }
        Returns: {
          sku: string
          type: string
          make: string
          model: string
          year_generation: string
          parent_generation: string
          submodel1: string
          submodel2: string
          submodel3: string
          product: string
          display_color: string
          msrp: number
          price: number
          quantity: string
          display_id: string
          make_slug: string
          model_slug: string
          year_options: string
          display_set: string
          preorder: boolean
          preorder_date: string
          preorder_discount: number
        }[]
      }
      get_seat_cover_products_sorted_by_color_preview: {
        Args: {
          p_type?: string
          p_cover?: string
          p_make?: string
          p_model?: string
          p_year?: string
          p_submodel?: string
          p_submodel2?: string
          p_submodel3?: string
        }
        Returns: {
          sku: string
          type: string
          make: string
          model: string
          year_generation: string
          parent_generation: string
          submodel1: string
          submodel2: string
          submodel3: string
          product: string
          display_color: string
          msrp: number
          price: number
          quantity: string
          display_id: string
          make_slug: string
          model_slug: string
          year_options: string
          display_set: string
          preorder: boolean
          preorder_date: string
          preorder_discount: number
        }[]
      }
      get_statement_timeout: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_table_columns: {
        Args: {
          p_table_name: string
        }
        Returns: {
          column_name: string
        }[]
      }
      get_top_products_with_details: {
        Args: {
          time_range?: string
        }
        Returns: {
          product_id: string
          display_name: string
          sku: string
          order_date: string
          product_count: number
        }[]
      }
      get_unique_years: {
        Args: {
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_unique_years_20240110: {
        Args: {
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_unique_years_20241115: {
        Args: {
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_unique_years_20241206: {
        Args: {
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_unique_years_shopify: {
        Args: {
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_unique_years_shopify_20241211: {
        Args: {
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_unique_years_shopify_20250107: {
        Args: {
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_unique_years_shopify_20250108: {
        Args: {
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_unique_years_shopify_20250110: {
        Args: {
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_unique_years_shopify_20250130: {
        Args: {
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_unique_years_shopify_20250207: {
        Args: {
          type_id_web: number
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_unique_years_web: {
        Args: {
          type_id_web: number
        }
        Returns: {
          year_id: number
          year: string
        }[]
      }
      hello_world: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          user_metadata: Json | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          user_metadata?: Json | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          user_metadata?: Json | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
        ]
      }
      s3_multipart_uploads: {
        Row: {
          bucket_id: string
          created_at: string
          id: string
          in_progress_size: number
          key: string
          owner_id: string | null
          upload_signature: string
          user_metadata: Json | null
          version: string
        }
        Insert: {
          bucket_id: string
          created_at?: string
          id: string
          in_progress_size?: number
          key: string
          owner_id?: string | null
          upload_signature: string
          user_metadata?: Json | null
          version: string
        }
        Update: {
          bucket_id?: string
          created_at?: string
          id?: string
          in_progress_size?: number
          key?: string
          owner_id?: string | null
          upload_signature?: string
          user_metadata?: Json | null
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_bucket_id_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
        ]
      }
      s3_multipart_uploads_parts: {
        Row: {
          bucket_id: string
          created_at: string
          etag: string
          id: string
          key: string
          owner_id: string | null
          part_number: number
          size: number
          upload_id: string
          version: string
        }
        Insert: {
          bucket_id: string
          created_at?: string
          etag: string
          id?: string
          key: string
          owner_id?: string | null
          part_number: number
          size?: number
          upload_id: string
          version: string
        }
        Update: {
          bucket_id?: string
          created_at?: string
          etag?: string
          id?: string
          key?: string
          owner_id?: string | null
          part_number?: number
          size?: number
          upload_id?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_parts_bucket_id_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "s3_multipart_uploads_parts_upload_id_fkey"
            columns: ["upload_id"]
            isOneToOne: false
            referencedRelation: "s3_multipart_uploads"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      list_multipart_uploads_with_delimiter: {
        Args: {
          bucket_id: string
          prefix_param: string
          delimiter_param: string
          max_keys?: number
          next_key_token?: string
          next_upload_token?: string
        }
        Returns: {
          key: string
          id: string
          created_at: string
        }[]
      }
      list_objects_with_delimiter: {
        Args: {
          bucket_id: string
          prefix_param: string
          delimiter_param: string
          max_keys?: number
          start_after?: string
          next_token?: string
        }
        Returns: {
          name: string
          id: string
          metadata: Json
          updated_at: string
        }[]
      }
      operation: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
